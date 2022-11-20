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
import { IFriend } from "../interfaces";
import api from "../services/api";
import { errorToast, successToast } from "../services/toast";
import { useAuth } from "./AuthContext";
import { useNexus } from "./NexusContext";

interface IProvider {
    children: ReactNode;
}

interface IFriendContext {
    addFriend: (friendName: string) => void;
    removeFriend: (friendId: string) => void;
    allUsers: [];
    friends: IFriend[] | [];
    setFriends: (friend: IFriend[]) => void;
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

    const [allUsers, setAllUsers] = useState()
    const [friends, setFriends] = useState<IFriend[] | []>([])
    // const [list, setList] = useState()

    const addFriend = async () => {
        const { data } = await api.post(`/friends`, { username: "Sidarta" })
        console.log(data)
    }
    // addFriend()

    const removeFriend = async (friendId: string) => {
        await api.delete(`/friends/${friendId}`)
        const filter = friends.filter((friend: IFriend) => friend.friendId !== friendId)
        setFriends(filter)
    }

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get(`/users`)
            console.log(data)
            setAllUsers(data)
        }
        getUsers()
    }, []);

    useEffect(() => {
        async function getFriends() {
            const id = getCookie('id');
            const token = getCookie('token');
            const response = await api.get(`/users/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setFriends(response.data.friends)
        }
        getFriends()
    }, []);

    return (
        <FriendContext.Provider
            value={{
                addFriend,
                removeFriend,
                allUsers,
                friends,
                setFriends,
            }}>
            {children}
        </FriendContext.Provider>
    );
}

export const useFriends = () => useContext(FriendContext);
