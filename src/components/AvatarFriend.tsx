import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

interface IAvatarFriend {
  alt: string;
  src: string;
  status: boolean;
}

const AvatarFriend = ({ alt, src, status }: IAvatarFriend) => {
  const style = {
    width: 60,
    height: 60
  }

  const statusOn = {
    backgroundColor: '#44b700',
    color: '#44b700',
  }

  const statusOff = {
    backgroundColor: '#5b5d5a',
    color: '#e6ebe4',
  }

  const colorStatus = status ? statusOn : statusOff

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      ...colorStatus,
      width: '12px',
      height: '12px',
      borderRadius: '50%',  
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(1)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(3)',
        opacity: 0,
      },
    },
  }));

  return (
    <StyledBadge
      overlap='circular'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'
    >
      <Avatar alt={alt} src={src} style={style} />
    </StyledBadge>
  );
};

export default AvatarFriend;
