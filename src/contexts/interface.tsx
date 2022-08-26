import { createContext, ReactNode } from "react";
import { ITechAdd } from "../components/ModalTech";
import { IUserRegister } from "../pages/Home";

export interface IUser {
  id: string;
  email: string;
  password: string | number;
  name?: string;
  coursemodule?: string;
  techs?: IUserTech[];
}

export interface IUserTech {
  id: string | number;
  title: string;
  status: string;
  Iniciante: string;
  Intermediário: string;
  Avançado: string;
}

export interface IRemoveTech {
  id: string | number;
  
}

export interface IRegister {
  name: string;
  email: string;
  password: string | number;
  confirme: string | number;
  bio: string;
  contact: string | number;
  course_module: string;
  primeiromodulo: string;
  segundomodulo: string;
  terceiromodulo: string;
  quartomodulo: string;
}

export interface IAuthContext {
  user: IUser;
  loading: boolean;
  signIn: (loginData: IUserRegister) => void;
  regist: (registerData: IRegister) => void;
  AddTech: (techData: ITechAdd) => void;
  RemoveTech: (id: IRemoveTech) => void;
}

export interface IProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
