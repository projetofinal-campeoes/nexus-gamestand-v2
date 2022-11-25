import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { MdLock, MdMail, MdPerson } from 'react-icons/md';
import { useNexus } from '../../context/NexusContext';
import Input from '../Input';

const EditableSettings = () => { 

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
    <section className='flex items-center justify-around p-[42px] w-[100%] h-[100%] gap-1'>
      <form
          action=""
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit(onSubmited)}
        >
          <Input
            type="text"
            placeholder="username"
            name="username"
            register={register}
            style='p-2'
          >
            <MdPerson color="E1E1E1" size={20} />
          </Input>
          <Input
            type="text"
            placeholder="email"
            name="email"
            register={register}
          >
            <MdMail color="E1E1E1" size={20} />
          </Input>
          <Input
            type="text"
            placeholder="imagem url"
            name="avatar_url"
            register={register}
          >
            <MdLock color="E1E1E1" size={20} />
          </Input>
          <Input
            type="password"
            placeholder="password"
            name="password"
            register={register}
          >
            <MdLock color="E1E1E1" size={20} />
          </Input>
            <button
              type='submit'       
              className='w-[130px] h-[41px] text-defaulttextdark bg-primarycolor rounded-[8px]'
            >
              Save
            </button>
        </form>

                 
        <form
          action=""
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit(onSubmited)}
        >
          <Input
            type="text"
            placeholder="steam"
            name="steam"
            register={register}
            style='p-2'
          >
            <MdPerson color="E1E1E1" size={20} />
          </Input>
          <Input
            type="text"
            placeholder="gamepass"
            name="email"
            register={register}
          >
            <MdMail color="E1E1E1" size={20} />
          </Input>
          <Input
            type="text"
            placeholder="imagem url"
            name="avatar_url"
            register={register}
          >
            <MdLock color="E1E1E1" size={20} />
          </Input>
          <Input
            type="password"
            placeholder="password"
            name="password"
            register={register}
          >
            <MdLock color="E1E1E1" size={20} />
          </Input>
            <button
              type='submit'       
              className='w-[130px] h-[41px] text-defaulttextdark bg-primarycolor rounded-[8px]'
            >
              Save
            </button>
        </form>
      
     {/*  <Link href='/settings'>
        <button
        type='button'       
        className='w-[130px] h-[41px] text-defaulttextdark bg-primarycolor rounded-[8px]'
      >
        Save
      </button>
      </Link> */}
      
    </section>
  );
};

export default EditableSettings;
