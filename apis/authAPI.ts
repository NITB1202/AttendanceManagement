import axiosInstance from "./axiosConfig";

const authAPI = {
  login: (username: string, password: string) => {
    return axiosInstance.post(
      "/auth/login", 
      { username, password }, 
      { attachToken: false }
    );
  },

  
};

export default authAPI;
