import { Avatar } from '@mui/material';
import { getCookie } from 'cookies-next';
import BackgroundDashboard from '../../components/BackgroundDashboard';
import GeralContainer from '../../components/GeralContainer';
import HeaderDashboard from '../../components/HeaderDashboard';
import LeftAside from '../../components/LeftAside';
import FriendList from '../../components/ProfileSections/FriendsList';
import GamesList from '../../components/ProfileSections/GamesList';
import PromotionsList from '../../components/ProfileSections/PromotionsList';
import RightSide from '../../components/RightSide';
import SEO from '../../components/SEO';
import { IProfile } from '../../interfaces';
import api from '../../services/api';
const Profile = ({ user }: IProfile) => {

  const styleProfile = {
    width: 171,
    height: 171,
    marginTop: '56px',
  };

  return (
    <BackgroundDashboard config='flex flex-col'>
      <SEO
        title='Profile'
        description='The NEXUS App simplifies your access to your games, unifying all platforms into one.'
      />
      <GeralContainer>
        <LeftAside />
        <RightSide>
          <HeaderDashboard title='PROFILE' />

          <main className='flex items-center justify-between flex-col w-[100%] h-[100%] rounded-[38px]'>

            <section className='flex flex-col items-center relative w-[100%]'>
              <img
                src='/smooth-background-blur.png'
                className='w-[100%] h-[180px] absolute top-0 object-cover hover:object-top object-center transition-all duration-500 rounded-t-[50px]'
              />
              <Avatar
                alt={user.username}
                src={user.avatar_url}
                style={styleProfile}
              />
              <h2 className='mt-2 font-inter text-title2 font-bold text-defaulttextdark'>
                {user.username}
              </h2>
            </section>
            <section className='flex justify-between gap-3 w-[100%] h-[300px] p-[20px] rounded-b-[38px]'>
            
              <GamesList games={user.custom_games} />
              <PromotionsList promotions={user.promotions} />
              <FriendList friends={user.friends}/>
              
            </section>
          </main>
        </RightSide>
      </GeralContainer>
    </BackgroundDashboard>
  );
};

export default Profile;

export const getServerSideProps = async ({ req, res }) => {
  const id = getCookie('id', { req, res });
  const token = getCookie('token', { req, res });
  const response = await api.get(`/users/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return {
    props: { user: response.data },
  };
};