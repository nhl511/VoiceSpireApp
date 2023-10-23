import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { postLogin } from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const login = (email, password) => {
    setIsLoading(true);
    setIsLoadingButton(true);
    postLogin(email, password)
      .then((userData) => {
        setUserInfo(userData);
        setUserToken(userData.token);
        AsyncStorage.setItem("userInfo", JSON.stringify(userData));
        AsyncStorage.setItem("userToken", userData.token);
        setIsLoadingButton(false);
      })
      .catch((error) => {
        if (error.response.status === 500) {
          setLoginErrorMessage("No server response");
        } else if (error.response.status === 400) {
          setLoginErrorMessage("Missing Username or Password");
        } else if (error.response.status === 401) {
          setLoginErrorMessage("Sai Email hoặc mật khaẩu");
        } else {
          setLoginErrorMessage("Login Failed");
        }
        setIsLoadingButton(false);
      });

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");

    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userToken,
        isLoading,
        userInfo,
        loginErrorMessage,
        setLoginErrorMessage,
        isLoadingButton,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
