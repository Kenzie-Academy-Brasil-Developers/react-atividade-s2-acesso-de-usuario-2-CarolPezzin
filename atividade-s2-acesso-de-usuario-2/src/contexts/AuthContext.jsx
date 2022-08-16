import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userTech, setUserTech] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@context-demo:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

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

  const signIn = async (data) => {
    const response = await api.post("/sessions", data);

    const { user: userResponse, token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(userResponse);

    localStorage.setItem("@context-demo:token", token);

    navigate("/dashboard", { replace: true });
  };

  const AddTech = (data) => {
    const token = localStorage.getItem("@context-demo:token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .post("/users/techs", data)
      .then((response) => {
        // const { data } = response;
        // const newTechList = [...user.techs, data];
        // setUser({ ...user, techs: newTechList });
        setUserTech(!userTech)
      })
      .catch((error) => console.log(error.data.message));
  };

  const RemoveTech = (id) => {
    const token = localStorage.getItem("@context-demo:token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .delete(`/users/techs/${id}`)
      .then((response) => setUserTech(!userTech))
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, loading, AddTech, RemoveTech }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
