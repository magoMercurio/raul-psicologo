
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className='flex flex-col'>
      <h2 className='custom-content-title mb-5' >Formulario de Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <input type="text" placeholder="Nombre" autoComplete='true' className="input input-bordered input-info border-customPrimary w-full max-w-xs" {...register("Nombre", {required: true, maxLength: 80})} />
        <input type="email" placeholder="Email" autoComplete='true' className="input input-bordered input-info border-customPrimary w-full max-w-xs" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Telefono" autoComplete='true' className="input input-bordered input-info  border-customPrimary w-full max-w-xs" {...register("Telefono", {maxLength: 12})} />

        <button type="submit" className='btn custom-button-colored w-36  mb-5'> Enviar </button>
      </form>
    </div>
    
  );
}

export default Form