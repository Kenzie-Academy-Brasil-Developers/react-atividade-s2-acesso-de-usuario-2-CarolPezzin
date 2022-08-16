import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { ContainerForm } from "./style";

const ModalTech = ({modal,setModal}) => {
  const { register,formState: { errors }, handleSubmit } = useForm();

  const { AddTech } = useAuth();

  return (
    <ContainerForm>{
      modal && <form onSubmit={handleSubmit(AddTech)}>
      <div><h5>Cadastrar tecnologia</h5>
      <button onClick={() => setModal(false)}>X</button>
      </div>
      <label>Nome
      <input
        name="title"
        placeholder="Tech aqui"
        {...register("title", { required: true })}
      />
      {errors.title?.type === 'required' && <p>Preencha o campo</p>}
      </label>
      <label>Selecionar status
      <select name="status" {...register("status", { required: true })}>
        <option name="Iniciante" value="Iniciante">
          Iniciante
        </option>
        <option name="Intermediário" value="Intermediário">
          Intermediário
        </option>
        <option name="Avançado" value="Avançado">
          Avançado
        </option>
      </select>
      </label>
      <button type="submit">Cadastrar Tecnologia</button>
    </form>
    }
    </ContainerForm>);
};
export default ModalTech;
