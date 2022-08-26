import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITechAdd } from "../components/ModalTech";
import { IRegisterUser } from "../pages/Cadastro";
import { IUserRegister } from "../pages/Home";
import {
  AuthContext,
  IProps,
  IRemoveTech,
  IUser,
  IUserTech,
} from "./interface";
import api from "../services/api";

export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [userTech, setUserTech] = useState<IUserTech[]>([] as IUserTech[]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@context-demo:token");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          //.common. eh para passar autorização para todos os metodos
          const { data } = await api.get("/profile");

          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [userTech]);

  const signIn = async (LoginData: IUserRegister) => {
    const response = await api.post("/sessions", LoginData);

    const { user: userResponse, token } = response.data;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(userResponse);

    localStorage.setItem("@context-demo:token", token);

    navigate("/dashboard", { replace: true });
  };

  async function regist(registerData: IRegisterUser) {
    const response = await api.post("/users", registerData);
    navigate("/");
  }

  const AddTech = async (techData: ITechAdd) => {
    const token = localStorage.getItem("@context-demo:token");
    api.defaults.headers.post.authorization = `Bearer ${token}`;

    const response = 
    await api
      .post("/users/techs", techData)
      .then((response) => {
        const { data } = response;
        const newTechList = [...(user.techs as IUserTech[]), data];
        setUser({ ...user, techs: newTechList });
        //setUserTech(!userTech)
      })
      .catch((error) => console.log(error.data.message));
  };

  const RemoveTech = (id: IRemoveTech) => {
    const token = localStorage.getItem("@context-demo:token");
    api.defaults.headers.delete.authorization = `Bearer ${token}`;
    api
      .delete(`/users/techs/${id}`)
      .then(response => setUserTech(userTech))
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, loading, AddTech, RemoveTech, regist }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
