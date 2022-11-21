import { useForm } from 'react-hook-form';
import { useNexus } from '../../context/NexusContext';

const EditableSettings = () => {
  const { settings } = useNexus();

  /* const charEspecial = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/;

  const schema = yup.object().shape({      
    email: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório').min(8, 'Sua senha deve ter entre 8-20 caracteres').matches(charEspecial, "Não possui caracteres especiais"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null],'Confirmação de senha inválida').required('Campo obrigatório'),
    name: yup.string().required("Campo obrigatório"),  
    bio: yup.string().required("Campo obrigatório"), 
    contact: yup.string().required("Campo obrigatório"),  
    course_module:yup.string().required("Escolha uma opção")        
    }) */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmited = (data: any) => {
    return console.log(data);
  };

  return (
    <section className='flex items-center justify-center p-[42px] w-[100%] h-[100%] gap-1'>
      <div className='w-[50%] h-[100%]'>
        <h2 className='mb-[25px] text-[22px] font-semibold text-defaulttextdark'>
          {' '}
          My Profile{' '}
        </h2>

        <ul className='flex flex-wrap w-[100%] h-[100%] text-defaulttextdark'>
          <li className='flex flex-col w-[50%] h-[20%] text-defaulttextdark'>
            USERNAME
            <span className='text-headline3 text-boxcolorlight'></span>
          </li>

          <li className='flex flex-col w-[50%] h-[20%] text-defaulttextdark'>
            IMAGEM URL
            <span className='text-headline3 text-boxcolorlight'></span>
          </li>

          <li className='flex flex-col w-[50%] h-[20%] text-defaulttextdark'>
            EMAIL
            <span className='text-headline3 text-boxcolorlight'></span>
          </li>

          <li className='flex flex-col w-[50%] h-[20%] text-defaulttextdark'>
            PASSWORD
            <span className='text-headline3 text-boxcolorlight'></span>
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
            <span className='p-2 text-headline3 text-boxcolorlight'></span>
          </li>

          <li className='flex flex-col w-[50%] h-[20%]'>
            EPIC GAMES
            <span className='p-2 text-headline3 text-boxcolorlight'></span>
          </li>

          <li className='flex flex-col w-[50%] h-[20%]'>
            PLAYSTATION
            <span className='p-2 text-headline3 text-boxcolorlight'></span>
          </li>

          <li className='flex flex-col w-[50%] h-[20%]'>
            XBOX GAME PASS
            <span className='p-2 text-headline3 text-boxcolorlight'></span>
          </li>
        </ul>
      </div>
      <button
        type='button'
        onClick={settings}
        className='w-[130px] h-[41px] text-defaulttextdark bg-primarycolor rounded-[8px]'
      >
        Save
      </button>
    </section>
  );
};

export default EditableSettings;
