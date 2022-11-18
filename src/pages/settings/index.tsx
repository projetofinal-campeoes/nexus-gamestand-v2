import { Avatar } from '@mui/material';
import { getCookie } from 'cookies-next';
import { FaUserEdit } from 'react-icons/fa';
import BackgroundDashboard from '../../components/BackgroundDashboard';
import GeralContainer from '../../components/GeralContainer';
import HeaderDashboard from '../../components/HeaderDashboard';
import LeftAside from '../../components/LeftAside';
import RightSide from '../../components/RightSide';
import { IProfile } from '../../interfaces';
import api from '../../services/api';

const Settings = ({ user }: IProfile) => {
  const styleProfile = {
    width: 171,
    height: 171,
    marginTop: '26px',
  };

  return (
    <BackgroundDashboard>
      <GeralContainer>
        <LeftAside />
        <RightSide>
          <HeaderDashboard title='SETTINGS' />
          <main className='flex items-center flex-col w-[100%] h-[100%] rounded-[38px] bg-[#131A39]'>
            <section className='flex self-end justify-between w-[60%]'>
              <div>
                <Avatar
                  alt={user.username}
                  src={user.avatar_url}
                  style={styleProfile}
                />
                <h2 className='mt-2 font-inter text-title2 font-bold text-defaulttextdark'>
                  {user.username}
                </h2>
              </div>
              <FaUserEdit color='white' size={31} style={{ margin: '36px' }} />
            </section>

            <section className='flex items-center justify-center p-[42px] w-[100%] h-[100%] gap-1'>
              <div className='w-[50%] h-[100%]'>
                <h2 className='mb-[25px] text-[22px] font-semibold text-defaulttextdark'>
                  {' '}
                  My Profile{' '}
                </h2>

                <ul className='flex flex-wrap w-[100%] h-[100%] text-defaulttextdark'>
                  <li className='flex flex-col w-[50%] h-[20%]'>
                    USERNAME
                    <span className='p-2 text-headline3 text-boxcolorlight'>
                      {user.username}
                    </span>
                  </li>

                  <li className='flex flex-col w-[50%] h-[20%]'>
                    IMAGEM URL
                    <span className='p-2 text-headline3 text-boxcolorlight'>
                      {user.avatar_url
                        ? user.avatar_url
                        : 'You dont have profile image'}
                    </span>
                  </li>

                  <li className='flex flex-col w-[50%] h-[20%]'>
                    EMAIL
                    <span className='p-2 text-headline3 text-boxcolorlight'>
                      {user.email}
                    </span>
                  </li>

                  <li className='flex flex-col w-[50%] h-[20%]'>
                    PASSWORD
                    <span className='p-2 text-headline3 text-boxcolorlight'>
                      **********
                    </span>
                  </li>
                </ul>
              </div>

              <div className='w-[50%] h-[100%]'>
                <h2 className='mb-[25px] text-[22px] font-semibold text-defaulttextdark'>
                  {' '}
                  My Profile{' '}
                </h2>

                <ul className='flex flex-wrap w-[100%] h-[100%] text-defaulttextdark'>
                  <li className='flex flex-col w-[50%] h-[20%]'>
                    STEAM
                    <span className='p-2 text-headline3 text-boxcolorlight'>
                      {user.steam_user}
                    </span>
                  </li>

                  <li className='flex flex-col w-[50%] h-[20%]'>
                    EPIC GAMES
                    <span className='p-2 text-headline3 text-boxcolorlight'>
                      {user.avatar_url
                        ? user.avatar_url
                        : 'You dont have epic profile'}
                    </span>
                  </li>

                  <li className='flex flex-col w-[50%] h-[20%]'>
                    PLAYSTATION
                    <span className='p-2 text-headline3 text-boxcolorlight'>
                      {user.gamepass ? 'connected' : 'disconnected'}
                    </span>
                  </li>

                  <li className='flex flex-col w-[50%] h-[20%]'>
                    XBOX GAME PASS
                    <span className='p-2 text-headline3 text-boxcolorlight'>
                      {user.gamepass ? 'connected' : 'disconnected'}
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </RightSide>
      </GeralContainer>
    </BackgroundDashboard>
  );
};

export default Settings;

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
