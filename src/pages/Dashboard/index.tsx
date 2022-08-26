/* eslint-disable react-hooks/rules-of-hooks */
import { Containerdash } from "./style.module";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { TechList } from "../../components/TechList/index";
import ModalTech from "../../components/ModalTech/index";
import { useState } from "react";

const logo = require("./Logo.png" as string);
       
export const Dashboard = () => {
  const { user, loading } = useAuth();
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("@context-demo:token");
    navigate("/");
  }

  if (loading) {
    return <div>Carregando...</div>;
  }
  return user ? (
    <Containerdash>
      <header>
        <img src={logo} alt="logo" />
        <button type="button" onClick={logout}>
          Sair
        </button>
      </header>
      <div>
        <h3>Olá, {user.name}</h3>
        <p>{user.coursemodule}</p>
      </div>
      <section>
        <h2>Tecnologias</h2>
        <button onClick={() => setModal(true)}>+</button>
      </section>

      <ModalTech modal={modal} setModal={setModal} />
      <TechList />
    </Containerdash>
  ) : (
    <Navigate to="/" replace />
  );
};
