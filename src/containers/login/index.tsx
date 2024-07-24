import React from "react";
import { useNavigate } from "react-router-dom"
import { Login } from "../../components/pages/login";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "../../lib/schemas/loginSchema"
import { IFromLogin } from "../../types/login";
import { UserInfo } from "../../types/user";
import { signInWithGoogle, signInWithgGithub, login} from "../../services/auth"
import { UseUserStore } from "../../store/UserStore"

export const LoginC: React.FC = () => {
  const SetUserInfo = UseUserStore((state) => state.set_user_info)
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleSetUserInfo = (data: any) => {
    const { user } = data;
    const userInfo: UserInfo = {
      accessToken: user.accessToken,
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uId: user.uId,
    };
    SetUserInfo(userInfo);
  }

  const onSubmit: SubmitHandler<IFromLogin> = async (data) => {
    try {
      const { email, password } = data;
      const login_user = await login(email, password)
      if(login_user){
        handleSetUserInfo(login_user)
        navigate('/home')
      }
    } catch (error) {
      console.error("Ha ocurrido un error en hanldeLogin: ", error);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    try {
      const loginMethods: { [key: string]: () => Promise<any> } = {
        google: signInWithGoogle,
        github: signInWithgGithub,
      };

      const login = loginMethods[provider] ? await loginMethods[provider]() : null;

      if (login) {
        handleSetUserInfo(login)
        navigate('/home')
      } else {
        console.error("Invalid provider");
      }
    } catch (error) {
      console.error("Error handleSocialLogin", error);
    }
  };

  return (
    <Login control={control} handleSocialLogin={handleSocialLogin} handleLogin={handleSubmit} onSubmit={onSubmit} />
  );
};
