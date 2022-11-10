import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { FieldValues } from "react-hook-form";
import api from "../services/api";
import { errorToast, successToast } from "../services/toast";

interface IProvider {
  children: ReactNode;
}

interface IAuthContext {
  user: IUser | null;
  setUser: (user: IUser) => void;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  handleLogin: (account: FieldValues) => void;
  handleLogout: () => void;
  testUserToken: () => void;
  handleGame: (game: FieldValues) => void;
}

export interface IUser {
  username: any;
  email: string;
  password: string;
  steam: string | null;
  epic: string | null;
  playstation: string | null;
  xbox: boolean;
  imageURL?: any;
}

interface IError {
  response: {
    data: {
      error: string | Error;
    };
  };
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default function AuthProvider({ children }: IProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  const handleLogin = async (account: FieldValues) => {
    try {
      const {
        data: {
          token,
          user: { id },
        },
      } = await api.post("/login", account);
      setCookie("token", token);
      setCookie("id", id);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      const { data } = await api.get(`/users/${id}`);
      setUser(data);
      successToast("Success Login!", 1000);
      router.push("/dashboard");
    } catch (error: IError | any) {
      errorToast(String(error.response.data.message), 2500);
    }
  };

  //wtf? nao funcionante
  const handleGame = async (game: FieldValues) => {
    console.log(game);
    try {
      const token = getCookie("token");
      await api.post("/custom_games", game);
      successToast("Game added successfully", 1000);
    } catch (error: IError | any) {
      errorToast(String(error.response.data.message), 2500);
    }
  };

  const testUserToken = async () => {
    const tokenOnCookies = getCookie("token");
    const idOnCookies = getCookie("id");

    if (tokenOnCookies) {
      api.defaults.headers.common.Authorization = `Bearer ${tokenOnCookies}`;
      const { data } = await api.get(`/users/${idOnCookies}`);

      data && setUser(data);
    }
  };

  useEffect(() => {
    testUserToken();
  }, []);

  const handleLogout = () => {
    deleteCookie("token");
    deleteCookie("id");

    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        handleLogin,
        handleLogout,
        testUserToken,
        handleGame,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
