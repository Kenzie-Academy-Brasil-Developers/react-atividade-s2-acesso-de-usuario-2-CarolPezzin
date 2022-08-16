import { Container, Form} from './style.module.js'
import logo from "../../Logo.png"

import {useForm} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'


export function Cadastro() {


    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string()
        .required("Email obrigatório")
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Email inválido"),
        password: yup.string()
        .required("Senha obrigatório")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/, 'Senha invalida'),
        contact: yup.string().required("Contato obrigatório"),
        confirme: yup.string().oneOf([yup.ref('password')]).required("Deve ser igual a senha"),
        course_module: yup.string().required("Obrigatório informar o módulo")
    })

    const navigate = useNavigate()

    const {register, 
        handleSubmit,
        formState:{errors},
      } = useForm({
        resolver: yupResolver(formSchema)
      })
  
      async function regist(data) {
        
        const response = await api.post('/users', data)
        navigate('/')
      }

      function backLogin(){
        navigate('/')
      }
  
    return (
      <Container>
        <div>
        <img src={logo} alt={logo}/>
        <button type='button' onClick={backLogin}>Voltar</button>
        </div>
        <Form onSubmit={handleSubmit(regist)}>
        <div>
        <h3>Crie sua conta</h3>
        <p>Rapido e grátis, vamos nessa</p>
        </div>
        <label>Nome
            <input name="name" type="text" placeholder="Digite aqui seu nome" {...register("name")}></input>
            {errors.name?.message}
          </label>
          <label>Email
            <input name="email" type="text" placeholder="Digite aqui seu email" {...register("email")}></input>
            {errors.email?.message}
          </label>
          <label>Senha
            <input name="password" type="password" placeholder="Digite aqui sua senha" {...register("password")}></input>
            {errors.password?.message}
          </label>
          <label>Confirme Senha
            <input name="confirme" type="text" placeholder="Digite novamente sua senha" {...register("confirme")}></input>
            {errors.confirme?.message}
          </label>
          <label>Bio
            <input name="bio" type="text" placeholder="Fale sobre você" {...register("bio")}></input>
          </label>
          <label>Contato
            <input name="contact" type="text" placeholder="Opção de contato" {...register("contact")}></input>
            {errors.contato?.message}
          </label>
          <label>Selecionar módulo
          <select name='course_module' {...register('course_module')}>
          {errors.modulo?.message}
            <option name="primeiromodulo" class="primeiromodulo" value="primeiro modulo">Primeiro módulo (Introdução ao Frontend)</option>
            <option name="segundomodulo" class="segundomodulo" value="segundo modulo">Segundo módulo (Frontend Avançado)</option>
            <option name="terceiromodulo" class="terceiromodulo" value="terceiro modulo">Terceiro módulo (Introdução ao Backend)</option>
            <option name="quartomodulo" class="quartomodulo" value="quarto modulo">Quarto módulo (Backend Avançado)</option>
          </select></label>
          <button type="submit">Cadastrar</button>
          
        </Form>
      </Container>
    );
  }