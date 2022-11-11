import { IFriends } from "../../interfaces"
import AvatarFriend from "../AvatarFriend"



const FriendList = ({friends}:IFriends) => {
  return (
    <div className='w-[25%] h-[230px]'>
                <h3 className='text-defaulttextdark mb-2'>
                  {' '}
                  <span className='font-bold'> Friends </span> {friends.length}{' '}
                </h3>

                <ul className='overflow-auto p-2 flex flex-wrap items-center justify-center gap-2 w-[100%] h-[230px] rounded-b-[8px]'>
                    {
                      friends.map(friend =>
                      <li className='drop-shadow-2xl w-[100%] h-[100px] gap-2 rounded-lg flex items-center justify-around p-4 border-[2px] border-primarycolor border-solid'>
                      <AvatarFriend
                        alt={friend.friendName}
                        src={friend.friendAvatar}
                        status={friend.friendStatus}
                      />
  
                      <div className='flex flex-col gap-2 w-[40%]'>
                        <h3 className='text-defaulttextdark mb-2 font-bold text-[22px]'>
                        {friend.friendName}
                        </h3>
  
                        <span className='font-bold text-primarycolor text-[14px]'>
                           {friend.friendStatus ? 'Online': 'Offline'}
                        </span>
                      </div>
                    </li>)
                    }

                  
                </ul>
              </div>
  )
}

export default FriendList