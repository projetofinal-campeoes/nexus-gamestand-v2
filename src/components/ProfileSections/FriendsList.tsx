import { IFriends } from "../../interfaces"
import AvatarFriend from "../AvatarFriend"



const FriendList = ({friends}:IFriends) => {
  return (
    <div className='w-[25%] border border-[#333333] border-solid relative p-2 rounded-b-[25px] rounded-t-[5px]'>
                <h3 className='text-defaulttextdark mb-2'>
                  {' '}
                  <span className='font-bebas  text-[30px] bg-backgroundcolor mb-4 px-1 absolute top-[-14px]'> Friends: {friends.length}{' '}</span> 
                </h3>

                <ul className='overflow-auto flex flex-wrap gap-2 mt-3 w-[100%] h-[285px]'>
                    {
                      friends.map(friend =>
                      <li key={friend.id} className='drop-shadow-2xl w-[48%] h-[80px] gap-2 rounded-lg flex items-center justify-around p-4 bg-boxcolordark'>
                      <AvatarFriend
                        alt={friend.friendName}
                        src={friend.friendAvatar}
                        status={friend.friendStatus}
                      />
  
                      <div className='flex flex-col gap-2 w-[40%] ml-2'>
                        <h3 className='text-defaulttextdark mb-2 font-bebas text-[20px] truncate cursor-default' >
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