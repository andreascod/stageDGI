import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import IMAGE from '../3D/ilaina.png'; // Vous pouvez utiliser une autre image si vous le souhaite
import AuthUser from '../components/AuthUser';
import { FaPlusCircle } from 'react-icons/fa';
export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const roleRef = useRef();
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const {http}=AuthUser();
  const handleRegister = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('Nom_util', nameRef.current.value);
    formData.append('email', emailRef.current.value);
    formData.append('password', passwordRef.current.value);
    formData.append('password_confirmation', passwordConfirmRef.current.value);
    formData.append('role', roleRef.current.value);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await http.post('/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Enregistrement réussi ! Un e-mail a été envoyé.');
      setErrors({});
    } catch (err) {
      if (err.response && err.response.data) {
        setErrors(err.response.data.errors || { error: 'Une erreur est survenue.' });
      } else {
        setErrors({ error: 'Erreur inconnue.' });
      }
    }
  };

  return (
    <motion.div
      className='w-full min-h-screen flex items-start fixed '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[25%] left-[10%] flex flex-col'>
          {/* Contenu ou éléments supplémentaires */}
        </div>
        <img src={IMAGE} className='w-[400px] h-[400px] object-cover mx-[150px] my-[90px]' alt='Background' />
      </div>
      <div className='w-1/2 h-4/5 bg-[#ffffff] flex flex-col p-20'>
        <div className='w-full flex flex-col mb-2'>
          <div className='w-full h-[400px] flex flex-col '>
            <h3 className='text-2xl text-[#336666] font-semibold mb-4 my-6'>Inscription</h3>
            <p className='text-sm mb-12'>Bienvenue ! Veuillez entrer vos informations.</p>
            <form onSubmit={handleRegister}>
              <div className='w-full flex flex-col'>
                <input
                  type='text'
                  ref={nameRef}
                  placeholder='Nom'
                  required
                  className="mt-1 block my-[1rem] w-[100%] px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type='email'
                  ref={emailRef}
                  placeholder='Email'
                  required
                  className="mt-1 my-[1rem] block w-[100%] px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                  <div className="md:flex space-x-12 hidden  ">
                <input
                  type='password'
                  ref={passwordRef}
                  placeholder='Mot de passe'
                  required
                  className="mt-1 block my-[1rem] w-[100%] px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type='password'
                  ref={passwordConfirmRef}
                  placeholder='Confirmer le mot de passe'
                  required
                  className="mt-1 block my-[1rem] w-[100%] px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                </div>
                <div className="md:flex space-x-12 hidden  ">
                <select
                  ref={roleRef}
                  required
                  className='w-[50%] text-black bg-none border-b border-black outline-none focus:outline-none my-4'
                >
                  <option value=''>Sélectionner le rôle</option>
                  <option value='user'>user</option>
                  <option value='admin'>admin</option>
                </select>
                <label htmlFor="image" className="cursor-pointer text-[#336666] hover:text-blue-700 md:flex space-x-4 hidden">
                    <FaPlusCircle className="text-xl w-[100%] my-4" /><h1 className="my-3">Photo</h1>
                </label>
                <input
                  id='image'
                  type='file'
                  onChange={(e) => setImage(e.target.files[0])}
                  className='w-[100%] text-black bg-none border-b border-black outline-none focus:outline-none my-4 hidden'
                />
                </div>
                {errors && <p style={{ color: 'red' }}>{errors.error || Object.values(errors).join(', ')}</p>}
                {message && <p style={{ color: 'green' }}>{message}</p>}
                <button
                  className='w-[100%] h-14 text-white bg-[#336666] rounded-md text-center flex items-center justify-center my-6'
                  type='submit'
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
