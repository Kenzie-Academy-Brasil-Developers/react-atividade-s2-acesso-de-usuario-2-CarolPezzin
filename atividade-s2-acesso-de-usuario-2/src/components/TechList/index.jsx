import lx from "./lx.png";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerUl } from "./styles";

export const TechList = () => {
  const { user, RemoveTech } = useContext(AuthContext);

  return (
    <ContainerUl>
      {user?.techs?.map((tech) => {
        return (
          <li key={tech.id}>
            <h4>{tech.title}</h4>
            <nav>
              <h5>{tech.status}</h5>
              <button onClick={() => RemoveTech(tech.id)}>
                <img src={lx} alt="lixeira" />
              </button>
            </nav>
          </li>
        );
      })}
    </ContainerUl>
  );
};
