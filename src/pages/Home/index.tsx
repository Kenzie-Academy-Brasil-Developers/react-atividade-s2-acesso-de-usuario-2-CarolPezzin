import { ContainerApp } from "./style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthContext, IUser } from "../../contexts/interface";
import { useNavigate } from "react-router-dom";
// import React from 'react';
const logo = require("./Logo.png" as string);

export interface ILogin {
  setUser: (value: IUser | ((previousValue: IUser) => IUser[])) => void;
}

export type IUserRegister = Omit<IUser, "id">;

export function HomePag() {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email valido")
      .required("Email obrigatório"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(formSchema),
  });

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  function goRegister() {
    navigate("/cadastro");
  }

  return (
    <ContainerApp>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit(signIn)}>
        <h3>Login</h3>

        <label>
          Email
          <input
            id="email"
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          ></input>
          {errors.email?.message}
        </label>
        <label>
          Senha
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          ></input>
          {errors.password?.message}
        </label>
        <button type="submit">Entrar</button>
      </form>
      <section>
        <p>Ainda não possui uma conta?</p>
        <button type="button" onClick={goRegister}>
          Cadastre-se
        </button>
      </section>
    </ContainerApp>
  );
}

//export default HomePag;
