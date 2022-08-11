/* eslint-disable react-hooks/rules-of-hooks */
import styles from './style.module.css'
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
    <div className={styles.Containerdash}>
    <header className={styles.Dashheader}>
        <img src={logo} alt='logo' />
        <button type='button' onClick={logout} className={styles.Dashbtn}>Sair</button>
    </header>
    <div className={styles.Dashinfo}>
        <h3>Olá, {user.name}</h3>
        <p>{user.course_module}</p>
    </div>
    <div className={styles.Dashp}>
        <p className={styles.Dashpp}>Que pena! Estamos em desenvolvimento:(</p>
        <p className={styles.Dashppp}>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
    </div>
            :
    <Navigate to='/' replace />
}
