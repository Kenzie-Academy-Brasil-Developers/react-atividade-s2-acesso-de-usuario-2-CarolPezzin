import { ContainerApp} from './style.js'
import  logo  from './Logo.png'

import { useContext } from 'react';
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function HomePag() {
  

  const formSchema = yup.object().shape({
    email: yup.string().email("Digite um email valido").required("Email obrigatório"),
    password: yup.string().required("Senha obrigatório")
  })


  const {register, 
    handleSubmit,
    formState:{errors},
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const {signIn} = useContext(AuthContext)

  const navigate = useNavigate()
  
  function goRegister(){
      navigate('/cadastro')
  }

  return (
    <ContainerApp>
      <img src={logo} alt="logo"/>
      <form onSubmit={handleSubmit(signIn)}>
        <h3>Login</h3>
        <label>Email
          <input  name="email" type="text" placeholder="Digite seu email" {...register("email")}></input>
          {errors.email?.message}
        </label>
        <label>Senha
          <input  name="password" type="password" placeholder="Digite sua senha" {...register("password")}></input>
          {errors.password?.message}
        </label>
        <button type="submit">Entrar</button>
      </form>
      <section>
          <p>Ainda não possui uma conta?</p>
          <button type='button' onClick={goRegister}>Cadastre-se</button>
      </section>
      
    </ContainerApp>
    
  );
}

export default HomePag;