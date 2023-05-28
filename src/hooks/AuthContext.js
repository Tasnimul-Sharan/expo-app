// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import React, {createContext, useEffect, useState} from 'react';
// import { BASE_URL } from '../config';

// export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//   const [userInfo, setUserInfo] = useState({});
// const [isLoading, setIsLoading] = useState(false);
//   const [splashLoading, setSplashLoading] = useState(false);

// //   const register = (name, userName, password) => {
// //     setIsLoading(true);

// //     axios
// //       .post(`${BASE_URL}/register`, {
// //         userName,
// //         password,
// //       })
// //       .then(res => {
// //         let userInfo = res.data;
// //         setUserInfo(userInfo);
// //         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
// //         setIsLoading(false);
// //         console.log(userInfo);
// //       })
// //       .catch(e => {
// //         console.log(`register error ${e}`);
// //         setIsLoading(false);
// //       });
// //   };

//   const login = () => {
//     setIsLoading(true);
//     const data = {
//         username: username,
//         password: password,
//       };
//     axios
//       .post(`${BASE_URL}/login`, {
//         data,
//       })
//       .then(res => {
//         let userInfo = res.data;
//         console.log(userInfo);
//         setUserInfo(userInfo);
//         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//         setIsLoading(false);
//       })
//       .catch(e => {
//         console.log(`login error ${e}`);
//         setIsLoading(false);
//       });
//   };

// //   const logout = () => {
// //     setIsLoading(true);

// //     axios
// //       .post(
// //         `${BASE_URL}/logout`,
// //         {},
// //         {
// //           headers: {Authorization: `Bearer ${userInfo.access_token}`},
// //         },
// //       )
// //       .then(res => {
// //         console.log(res.data);
// //         AsyncStorage.removeItem('userInfo');
// //         setUserInfo({});
// //         setIsLoading(false);
// //       })
// //       .catch(e => {
// //         console.log(`logout error ${e}`);
// //         setIsLoading(false);
// //       });
// //   };

//   const isLoggedIn = async () => {
//     try {
//       setSplashLoading(true);

//       let userInfo = await AsyncStorage.getItem('userInfo');
//       userInfo = JSON.parse(userInfo);

//       if (userInfo) {
//         setUserInfo(userInfo);
//       }

//       setSplashLoading(false);
//     } catch (e) {
//       setSplashLoading(false);
//       console.log(`is logged in error ${e}`);
//     }
//   };

//   useEffect(() => {
//     isLoggedIn();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoading,
//         userInfo,
//         splashLoading,
//         // register,
//         login,
//         // logout,
//       }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState } from 'react';
import { post } from './apiUtils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const login = () => {
    // Perform login logic and set the authentication state
    // For example, retrieve user data from an API and store it in the user state variable
    setIsLoading(true);
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = async () => {
    setIsLoading(true);

    try {
      // Perform logout logic and clear the authentication state
      // For example, clear any stored tokens or user data

      // Make an API request to invalidate the user's tokens or perform any necessary cleanup
      await post.logout(); // Replace "api.logout()" with the actual logout API call

      // Clear any stored tokens or user data
      // Replace the following lines with your own implementation
      await AsyncStorage.removeItem('accessToken'); // Clearing token from AsyncStorage

      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };


  const authContextValue = {
    isLoading,
    isAuthenticated,
    user,
    login,
    logout,
    splashLoading,
    setSplashLoading
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};