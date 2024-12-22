import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: "https://express-firebase-daffaalif-daffaalifs-projects.vercel.app",
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login Failed");
  }
};

export const register = async (email, password, fullname, phone_no) => {
  try {
    console.log(email, password, fullname, phone_no);
    const response = await api.post("/auth/register", {
      email: email,
      password: password,
      fullname: fullname,
      phone_no: phone_no,
    });

    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.response?.data?.error || `${error}`);
  }
};

export const topup = async (
  token, 
  amount, 
  from_user, 
  to_user, 
  notes) => {
  try {
    console.log(token, amount, from_user, to_user, notes);
    const response = await api.post("transaction/topup", {
      token: token,                
      amount: amount,
      from_user: from_user,
      to_user: to_user,
      notes: notes,
    },
  {
    headers: {
      authorization: token,
    },
  });
  return response;
  }  catch (error) {
    console.error("Top Up error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
}

  export const transfer = async (
    token, 
    amount, 
    from_user, 
    to_user, 
    notes) => {
    try {
      console.log(token, amount, from_user, to_user, notes);
      const response = await api.post("transaction/transfer", {
        token: token,                
        amount: amount,
        from_user: from_user,
        to_user: to_user,
        notes: notes,
      },
    {
      headers: {
        authorization: token,
      }, 
    });
    return response;
  }  catch (error) {
    console.error("Transfer error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
}



export const currUser = async (token) => {
  const tokenn = await AsyncStorage.getItem('userToken')
  console.log ('tokenn', tokenn)
  try {
  
    const response = await api.get(
      "users/current",
      {
        headers: {
          authorization: tokenn,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.response?.data?.error || `${error}`);
  }
};

export default api;
