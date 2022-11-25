import { useRouter } from "next/router";
import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";
import { FieldValues } from "react-hook-form";
import api from "../services/api";
import { errorToast, successToast } from "../services/toast";

type IContext = {
  onSubmitRegister: (account: object) => void;
  onSubmitUpdateUser: (account: object) => void;
  userModalOpen: boolean;
  editSetting: boolean;
  handleUserModalOpen: Function;
  setUserModalOpen: Function;
  checked: boolean;
  setChecked: Function;
  profileModal: any;
  refreshData: () => void;
  handleGame: (game: FieldValues) => void;
  openModalAddGames: boolean;
  setOpenModalAddGames: Function;
  handleDeleteGame: Function;
  setEditSetting: Function;
  settings:() => void
};

type INexusProvider = {
  children: ReactNode;
};
export type IUser = {
  email: string;
  password: string;
  username?: string;
};

export const NexusContext = createContext<IContext>({} as IContext);

const NexusProvider = ({ children }: INexusProvider) => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [editSetting, setEditSetting] = useState(false);
  const profileModal = useRef<HTMLDivElement>();
  const [openModalAddGames, setOpenModalAddGames] = useState<boolean>(false);

  const handleUserModalOpen = () => {
    profileModal.current?.classList.add(
      "animate__animated",
      "animate__fadeOut"
    );
    setTimeout(() => {
      setUserModalOpen(!userModalOpen);
    }, 500);
  };

  const navigate = useRouter();

  const onSubmitUpdateUser = (account: FieldValues) => {
    
    api
      .patch("/users", account)
      .then((res) => {
        successToast("Success Register!", 1000);       
      })

      .catch(({ response: { data: error } }) => {
        errorToast(error.response.data.message, 2500);
      });
  };

  const onSubmitRegister = (account: FieldValues) => {
    delete account.confirmPassword;
    account.steam_user = "steam_user";

    api
      .post("/users", account)
      .then((res) => {
        successToast("Success Register!", 1000);
        navigate.push("/login");
      })

      .catch(({ response: { data: error } }) => {
        errorToast(error.response.data.message, 2500);
      });
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleGame = async (game: FieldValues) => {
    try {
      await api.post(
        "https://nexus-gamestand-api.herokuapp.com/custom_games",
        game
      );
      refreshData();
      successToast("Game added successfully", 1000);
      setOpenModalAddGames(!openModalAddGames);
    } catch (error: any) {
      errorToast(String(error.response.data.message), 2500);
    }
  };

  const handleDeleteGame = async (id:string) => {
    try {
      await api.delete(`/custom_games/${id}`)
      refreshData();
      successToast('Game deleted!', 1000)
    } catch (error) {
      errorToast(error.response.data.message, 1000)
      console.log(error)
    }
  }

  const settings = () => setTimeout(() => {
    setEditSetting((prev:boolean) => !prev)
  }, 1000) 

  return (
    <NexusContext.Provider
      value={{
        onSubmitUpdateUser,
        onSubmitRegister,
        userModalOpen,
        handleUserModalOpen,
        profileModal,
        checked,
        setChecked,
        setUserModalOpen,
        refreshData,
        handleGame,
        openModalAddGames,
        setOpenModalAddGames,
        handleDeleteGame,
        editSetting, 
        setEditSetting,
        settings
      }}
    >
      {" "}
      {children}{" "}
    </NexusContext.Provider>
  );
};

export default NexusProvider;

export const useNexus = () => useContext(NexusContext);
