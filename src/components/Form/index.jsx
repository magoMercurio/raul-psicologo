
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <input type="text" placeholder="Nombre" className="input input-bordered input-info border-customPrimary w-full max-w-xs" {...register("Nombre", {required: true, maxLength: 80})} />
      <input type="email" placeholder="Email" className="input input-bordered input-info border-customPrimary w-full max-w-xs" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Telefono" className="input input-bordered input-info  border-customPrimary w-full max-w-xs" {...register("Telefono", {maxLength: 12})} />

      <button type="submit" className='btn custom-button-colored w-36  mb-5'> Enviar </button>
    </form>
  );
}

export default Form