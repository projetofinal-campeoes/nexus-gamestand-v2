import React, { useEffect } from "react";
import BackgroundDashboard from "../../components/BackgroundDashboard";
import GeralContainer from "../../components/GeralContainer";
import HeaderDashboard from "../../components/HeaderDashboard";
import LeftAside from "../../components/LeftAside";
import RightSide from "../../components/RightSide";
import SEO from "../../components/SEO";
import PromotionCard from '../../components/PromotionCard'
import { getCookie } from 'cookies-next'
import axios from 'axios'
import AvatarFriend from "../../components/AvatarFriend";
import api from "../../services/api";
import { IFriend, IProfile } from "../../interfaces";
import { MdOutlinePersonRemove } from "react-icons/md";
import { useFriends } from "../../context/FriendsContext";

const Friends = () => {
    // console.log(allUsers)
    // const friends = user.friends
    const { removeFriend, friends, setFriends } = useFriends()
    console.log(friends)

    return (
        <BackgroundDashboard config="flex flex-col">
            <SEO
                title="Dashboard"
                description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
            />
            <GeralContainer>
                <LeftAside />
                <RightSide>
                    <HeaderDashboard title="Friends" />
                    <h1 className="text-[#FFFFFF] text-[41px] absolute top-30 left-[500px]">{friends.length}</h1>
                    <main className="h-[100%] w-[103%]">
                        <ul className='overflow-auto flex flex-wrap gap-x-4 gap-y-5 mt-4'>
                            {
                                friends.map(friend =>
                                    <li key={friend.id} className='drop-shadow-2xl w-[312px] h-[75px] gap-0 rounded-[20px] flex items-center justify-around p-4 bg-boxcolordark'>
                                        <AvatarFriend
                                            alt={friend.friendName}
                                            src={friend.friendAvatar}
                                            status={friend.friendStatus}
                                        />
                                        <div className='flex flex-row items-start justify-between w-[40%] ml-2'>
                                            <div>
                                                <h3 className='text-defaulttextdark mb-2 font-bebas text-[20px] truncate cursor-default' >
                                                    {friend.friendName}
                                                </h3>
                                                <span className='font-bold text-primarycolor text-[14px]'>
                                                    {friend.friendStatus ? 'Online' : 'Offline'}
                                                </span>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFriend(friend.friendId)}>
                                            <MdOutlinePersonRemove color="E1E1E1" size={30} />
                                        </button>
                                    </li>
                                )
                            }
                        </ul>
                    </main>
                </RightSide>
            </GeralContainer>
        </BackgroundDashboard>
    );
};

export default Friends;

// export const getServerSideProps = async ({ req, res }) => {
//     const id = getCookie('id', { req, res });
//     const token = getCookie('token', { req, res });
//     const response = await api.get(`/users/${id}`, {
//         headers: {
//             authorization: `Bearer ${token}`,
//         },
//     });
//     return {
//         props: { user: response.data },
//     };
// };