/* eslint-disable react-hooks/rules-of-hooks */
import './index.css'
import logo from './Logo.png'

import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

export const Dashboard = () => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
    return <div>Carregando...</div>
    }

    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem('@context-demo:token')
        navigate('/')
    }
    
    return user ? 
    <div className="Container-dash">
    <header className="Dash-header">
        <img src={logo} alt='logo' />
        <button type='button' onClick={logout} className='Dash-btn'>Sair</button>
    </header>
    <div className="Dash-info">
        <h3>Olá, {user.name}</h3>
        <p>{user.course_module}</p>
    </div>
    <div className="Dash-p">
        <p className='Dash-p-p'>Que pena! Estamos em desenvolvimento:(</p>
        <p className='Dash-p-p-p'>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
    </div>
            :
    <Navigate to='/' replace />
}
