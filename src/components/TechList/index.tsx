import { useContext } from "react";
import { AuthContext } from "../../contexts/interface";
import { ContainerUl } from "./styles";

const lx = require("./lx.png" as string);

export const TechList = () => {
  const { user, RemoveTech } = useContext(AuthContext);

  return (
    <ContainerUl>
      {user?.techs?.map(({id, title, status }) => {
        return (
          <li key={id}>
            <h4>{title}</h4>
            <nav>
              <h5>{status}</h5>
              <button onClick={() => RemoveTech({id})}>
                <img src={lx} alt="lixeira" />
              </button>
            </nav>
          </li>
        );
      })}
    </ContainerUl>
  );
};
