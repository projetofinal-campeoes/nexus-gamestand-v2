



const StaticSettings = ({ user }) => {
  
  return (
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
          My Library´s{' '}
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
              {user.avatar_url ? user.avatar_url : 'You dont have epic profile'}
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
  );
};

export default StaticSettings;
