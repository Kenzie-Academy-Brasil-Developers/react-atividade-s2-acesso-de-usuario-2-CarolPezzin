import { useForm } from "react-hook-form";
import { ContainerForm } from "./style";
import { AuthContext, IUserTech } from "../../contexts/interface";
import { useContext } from "react";

export type ITechAdd = Omit<IUserTech, "id">;

export interface ITech {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalTech = ({ modal, setModal }: ITech) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ITechAdd>();

  const { AddTech } = useContext(AuthContext);

  return (
    <ContainerForm>
      {modal && (
        <form onSubmit={handleSubmit(AddTech)}>
          <div>
            <h5>Cadastrar tecnologia</h5>
            <button onClick={() => setModal(false)}>X</button>
          </div>
          <label>
            Nome
            <input
              id="title"
              placeholder="Tech aqui"
              {...register("title", { required: true })}
            />
            {errors.title?.type === "required" && <p>Preencha o campo</p>}
          </label>
          <label>
            Selecionar status
            <select id="status" {...register("status", { required: true })}>
              <option id="Iniciante" value="Iniciante">
                Iniciante
              </option>
              <option id="Intermediário" value="Intermediário">
                Intermediário
              </option>
              <option id="Avançado" value="Avançado">
                Avançado
              </option>
            </select>
          </label>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      )}
    </ContainerForm>
  );
};
export default ModalTech;
