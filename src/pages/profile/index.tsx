import { Avatar } from '@mui/material';
import { getCookie } from 'cookies-next';
import AvatarFriend from '../../components/AvatarFriend';
import BackgroundDashboard from '../../components/BackgroundDashboard';
import GeralContainer from '../../components/GeralContainer';
import HeaderDashboard from '../../components/HeaderDashboard';
import LeftAside from '../../components/LeftAside';
import RightSide from '../../components/RightSide';
import SEO from '../../components/SEO';
import { IUser } from '../../interfaces';
import api from '../../services/api';

const Profile = ({ user }: IUser) => {
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

          <main className='flex items-center justify-between flex-col bg-[#131A39] w-[100%] h-[100%] rounded-[38px]'>
            <section className='flex flex-col items-center relative w-[100%]'>
              <img
                src='/smooth-background-blur.png'
                className='w-[100%] h-[180px] absolute top-0 object-cover hover:object-top object-center transition-[1s] rounded-t-[50px]'
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

            <section className='flex justify-between gap-5 w-[100%] h-[300px] p-[31px] rounded-b-[38px]'>
              <div className='w-[25%] h-[230px]'>
                <h3 className='text-defaulttextdark mb-2'>
                  {' '}
                  <span className='font-bold'> Games </span> 43{' '}
                </h3>

                <ul className='overflow-auto flex flex-wrap items-center justify-between gap-2 w-[100%] h-[230px] rounded-b-[38px]'>
                  <li>
                    <img
                      src='/game-image.png'
                      alt='ori'
                      className='rounded-lg w-[140px] h-[120px]'
                    />
                  </li>
                  <li>
                    <img
                      src='/game-image.png'
                      alt='ori'
                      className='rounded-lg w-[140px] h-[120px]'
                    />
                  </li>
                  <li>
                    <img
                      src='/game-image.png'
                      alt='ori'
                      className='rounded-lg w-[140px] h-[120px]'
                    />
                  </li>
                  <li>
                    <img
                      src='/game-image.png'
                      alt='ori'
                      className='rounded-lg w-[140px] h-[120px]'
                    />
                  </li>
                  <li>
                    <img
                      src='/game-image.png'
                      alt='ori'
                      className='rounded-lg w-[140px] h-[120px]'
                    />
                  </li>
                  <li>
                    <img
                      src='/game-image.png'
                      alt='ori'
                      className='rounded-lg w-[140px] h-[120px]'
                    />
                  </li>
                  <li>
                    <img
                      src='/game-image.png'
                      alt='ori'
                      className='rounded-lg w-[140px] h-[120px]'
                    />
                  </li>
                </ul>
              </div>

              <div className='w-[25%] h-[230px] '>
                <h3 className='text-defaulttextdark mb-2'>
                  {' '}
                  <span className='font-bold'> Promotions </span> 43{' '}
                </h3>

                <ul className='overflow-auto p-2 flex flex-wrap items-center justify-center gap-4 w-[100%] h-[230px] rounded-b-[4px]'>
                  <li className='drop-shadow-2xl w-[100%] h-[165px] gap-2 rounded-lg flex flex-col p-4 border-[2px] border-primarycolor border-solid'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-defaulttextdark mb-2 font-bold'>
                        New World
                      </h3>
                      <p className='text-defaulttextdark text-[13px]'>
                        New world has a very good promotion on steam, follow the
                        link there and lets close a server guys
                      </p>
                      <span className='font-bold text-primarycolor'>
                        {' '}
                        R$ 39,99{' '}
                      </span>
                    </div>

                    <div className='flex items-center justify-between gap-1'>
                      <div className='flex items-center gap-1'>
                        <img
                          src='/mini-logo.png'
                          alt='mini-logo'
                          className=''
                        />
                        <span className='text-primarycolor'>27</span>
                      </div>

                      <a href='' className='text-defaulttextdark'>
                        Ver na loja
                      </a>
                    </div>
                  </li>

                  <li className='drop-shadow-2xl w-[100%] h-[165px] gap-2 rounded-lg flex flex-col p-4 border-[2px] border-primarycolor border-solid'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-defaulttextdark mb-2 font-bold'>
                        New World
                      </h3>
                      <p className='text-defaulttextdark text-[13px]'>
                        New world has a very good promotion on steam, follow the
                        link there and lets close a server guys
                      </p>
                      <span className='font-bold text-primarycolor'>
                        {' '}
                        R$ 39,99{' '}
                      </span>
                    </div>

                    <div className='flex items-center justify-between gap-1'>
                      <div className='flex items-center gap-1'>
                        <img
                          src='/mini-logo.png'
                          alt='mini-logo'
                          className=''
                        />
                        <span className='text-primarycolor'>27</span>
                      </div>

                      <a href='' className='text-defaulttextdark'>
                        Ver na loja
                      </a>
                    </div>
                  </li>

                  <li className='drop-shadow-2xl w-[100%] h-[165px] gap-2 rounded-lg flex flex-col p-4 border-[2px] border-primarycolor border-solid'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-defaulttextdark mb-2 font-bold'>
                        New World
                      </h3>
                      <p className='text-defaulttextdark text-[13px]'>
                        New world has a very good promotion on steam, follow the
                        link there and lets close a server guys
                      </p>
                      <span className='font-bold text-primarycolor'>
                        {' '}
                        R$ 39,99{' '}
                      </span>
                    </div>

                    <div className='flex items-center justify-between gap-1'>
                      <div className='flex items-center gap-1'>
                        <img
                          src='/mini-logo.png'
                          alt='mini-logo'
                          className=''
                        />
                        <span className='text-primarycolor'>27</span>
                      </div>

                      <a href='' className='text-defaulttextdark'>
                        Ver na loja
                      </a>
                    </div>
                  </li>

                  <li className='drop-shadow-2xl w-[100%] h-[165px] gap-2 rounded-lg flex flex-col p-4 border-[2px] border-primarycolor border-solid'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-defaulttextdark mb-2 font-bold'>
                        New World
                      </h3>
                      <p className='text-defaulttextdark text-[13px]'>
                        New world has a very good promotion on steam, follow the
                        link there and lets close a server guys
                      </p>
                      <span className='font-bold text-primarycolor'>
                        {' '}
                        R$ 39,99{' '}
                      </span>
                    </div>

                    <div className='flex items-center justify-between gap-1'>
                      <div className='flex items-center gap-1'>
                        <img
                          src='/mini-logo.png'
                          alt='mini-logo'
                          className=''
                        />
                        <span className='text-primarycolor'>27</span>
                      </div>

                      <a href='' className='text-defaulttextdark'>
                        Ver na loja
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='w-[25%] h-[230px]'>
                <h3 className='text-defaulttextdark mb-2'>
                  {' '}
                  <span className='font-bold'> Friends </span> 22{' '}
                </h3>

                <ul className='overflow-auto p-2 flex flex-wrap items-center justify-center gap-2 w-[100%] h-[230px] rounded-b-[8px]'>
                  <li className='drop-shadow-2xl w-[100%] h-[100px] gap-2 rounded-lg flex items-center justify-around p-4 border-[2px] border-primarycolor border-solid'>
                    <AvatarFriend
                      alt='mathsudre'
                      src='https://avatars.githubusercontent.com/u/100591242?v=4'
                      status={false}
                    />

                    <div className='flex flex-col gap-2'>
                      <h3 className='text-defaulttextdark mb-2 font-bold text-[23px]'>
                        MathSudre
                      </h3>

                      <span className='font-bold text-primarycolor text-[16px]'>
                        {' '}
                        Online{' '}
                      </span>
                    </div>
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