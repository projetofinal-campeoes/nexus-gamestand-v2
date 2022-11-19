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
import { useAuth } from "./AuthContext";
import { useNexus } from "./NexusContext";

interface IProvider {
    children: ReactNode;
}

interface IFriendContext {
    addFriend: (friendName: string) => void;
    removeFriend: (friendId: string)=>void;
    allUsers: []
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

const FriendContext = createContext<IFriendContext>({} as IFriendContext);

export default function FriendsProvider({ children }: IProvider) {
    // const [user, setUser] = useState<IUser | null>(null);
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    // const router = useRouter();
    // const { user, setUser } = useAuth();

    const [allUsers, setAllUsers] = useState()
    // const [friends, setFriends] = useState()
    // const [list, setList] = useState()

    const addFriend = async () => {
        // const id = getCookie('id', { req, res });
        const token = getCookie('token');
        const { data } = await api.post(`/friends`, { username: "MatheusAdmin" })
        console.log(data)
    }

    const removeFriend = async (friendId: string) => {
        const id = getCookie('id');
        const token = getCookie('token');
        const { data } = await api.delete(`/friends/${friendId}`)
    }

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get(`/users`)
            console.log(data)
            setAllUsers(data)
        }
        getUsers()
    }, []);

    console.log(allUsers)
    
    return (
        <FriendContext.Provider
            value={{
                addFriend,
                removeFriend,
                allUsers,
            }}
        >
            {children}
        </FriendContext.Provider>
    );
}

export const useFriends = () => useContext(FriendContext);
