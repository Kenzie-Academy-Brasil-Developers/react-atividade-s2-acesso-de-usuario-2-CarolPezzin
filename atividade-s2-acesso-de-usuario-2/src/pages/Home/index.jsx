import styles from './style.module.css';
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
    <div className={styles.App}>
      <img src={logo} alt="logo"/>
      <form className={styles.Formlogin} onSubmit={handleSubmit(signIn)}>
        <h3>Login</h3>
        <label className={styles.Labellogin}>Email
          <input className={styles.Inputlogin} name="email" type="text" placeholder="Digite seu email" {...register("email")}></input>
          {errors.email?.message}
        </label>
        <label className={styles.Labellogin}>Senha
          <input className={styles.Inputlogin} name="password" type="password" placeholder="Digite sua senha" {...register("password")}></input>
          {errors.password?.message}
        </label>
        <button className={styles.Btnlogin} type="submit">Entrar</button>
      </form>
      <div className={styles.Containerlogin}>
          <p>Ainda não possui uma conta?</p>
          <button type='button' onClick={goRegister} className={styles.Btnlogincadastro}>Cadastre-se</button>
      </div>
      
    </div>
    
  );
}

export default HomePag;