import { Avatar } from '@mui/material';
import { getCookie } from 'cookies-next';
import { FaUserEdit } from 'react-icons/fa';
import BackgroundDashboard from '../../components/BackgroundDashboard';
import GeralContainer from '../../components/GeralContainer';
import HeaderDashboard from '../../components/HeaderDashboard';
import LeftAside from '../../components/LeftAside';
import RightSide from '../../components/RightSide';
import EditableSettings from '../../components/SettingsSection/EditableSettings';
import StaticSettings from '../../components/SettingsSection/StaticSettings';
import { useNexus } from '../../context/NexusContext';
import { IProfile } from '../../interfaces';
import api from '../../services/api';

const Settings = ({ user }: IProfile) => {
  const { editSetting, settings } = useNexus()

  

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
            </section>
             <EditableSettings/> 
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
