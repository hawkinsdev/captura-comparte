import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { UseUserStore } from "../store/UserStore"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/helper/firebase';
import AppNavigator from './AppNavigator';
import { UserInfo } from '../types/user';

const queryClient = new QueryClient();

const AppProvider: React.FC = () => {
  const SetUserInfo = UseUserStore((state) => state.set_user_info)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      const userInfo: UserInfo = {...user};
      SetUserInfo(userInfo)
      console.log("unsubscribe status", userInfo);
    });

    return () => unsubscribe();
  }, [SetUserInfo]);

  return (
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
        <ToastContainer />
      </QueryClientProvider>
  );
};

export default AppProvider;
