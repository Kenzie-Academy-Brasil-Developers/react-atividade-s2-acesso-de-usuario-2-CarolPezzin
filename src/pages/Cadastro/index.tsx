import { Container, Form } from "./style.module";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, IRegister } from "../../contexts/interface";

const logo = require("../../Logo.png" as string);

export type IRegisterUser = Omit<IRegister, "id">;

export function Cadastro() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required("Email obrigatório")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "Email inválido"
      ),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/,
        "Senha invalida"
      ),
    contact: yup.string().required("Contato obrigatório"),
    confirme: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Deve ser igual a senha"),
    course_module: yup.string().required("Obrigatório informar o módulo"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(formSchema),
  });

  const { regist } = useContext(AuthContext);

  function backLogin() {
    navigate("/");
  }

  return (
    <Container>
      <div>
        <img src={logo} alt={logo} />
        <button type="button" onClick={backLogin}>
          Voltar
        </button>
      </div>
      <Form onSubmit={handleSubmit(regist)}>
        <div>
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <label>
          Nome
          <input
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          ></input>
          {errors.name?.message}
        </label>
        <label>
          Email
          <input
            id="email"
            type="text"
            placeholder="Digite aqui seu email"
            {...register("email")}
          ></input>
          {errors.email?.message}
        </label>
        <label>
          Senha
          <input
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          ></input>
          {errors.password?.message}
        </label>
        <label>
          Confirme Senha
          <input
            id="confirme"
            type="text"
            placeholder="Digite novamente sua senha"
            {...register("confirme")}
          ></input>
          {errors.confirme?.message}
        </label>
        <label>
          Bio
          <input
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          ></input>
        </label>
        <label>
          Contato
          <input
            id="contact"
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          ></input>
          {errors.contact?.message}
        </label>
        <label>
          Selecionar módulo
          <select id="course_module" {...register("course_module")}>
            {errors.course_module?.message}
            <option id="primeiromodulo" value="primeiro modulo">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option id="segundomodulo" value="segundo modulo">
              Segundo módulo (Frontend Avançado)
            </option>
            <option id="terceiromodulo" value="terceiro modulo">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option id="quartomodulo" value="quarto modulo">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
        </label>
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
