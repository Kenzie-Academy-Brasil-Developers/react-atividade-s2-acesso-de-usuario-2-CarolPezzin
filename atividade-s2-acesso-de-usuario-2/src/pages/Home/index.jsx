import './index.css';
import  logo  from './Logo.png'

import { useContext } from 'react';
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

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
    <div className="App">
      <img src={logo} alt="logo"/>
      <form className="Form-login" onSubmit={handleSubmit(signIn)}>
        <h3>Login</h3>
        <label className='Label-login'>Email
          <input className='Input-login' name="email" type="text" placeholder="Digite seu email" {...register("email")}></input>
          {errors.email?.message}
        </label>
        <label className='Label-login'>Senha
          <input className='Input-login' name="password" type="password" placeholder="Digite sua senha" {...register("password")}></input>
          {errors.password?.message}
        </label>
        <button className='Btn-login' type="submit">Entrar</button>
      </form>
      <div className='Container-login'>
          <p>Ainda não possui uma conta?</p>
          <button type='button' onClick={goRegister} className='Btn-login-cadastro'>Cadastre-se</button>
      </div>
      
    </div>
    
  );
}

export default HomePag;