import React, { useState } from 'react';
import AuthUser from './components/AuthUser';
const FloatingBox = ({onContribuableClick,onVuClick}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { token, logout,user} = AuthUser();
  const logoutUser = () => {
      if (token !== undefined) {
          logout();
      }
  };
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 6000); // 5 000 millisecondes = 5 secondes
  };

  return (
    <div 
      className="fixed bottom-4 left-4 bg-[#568986] text-white p-4 rounded-full shadow-lg cursor-pointer animate-bounce   "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ zIndex: 10 }} // Pour s'assurer que la boîte reste visible au-dessus des autres éléments
    >
     <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6"
>
   
    <path d="M3 6h18" />
   
    <path d="M3 12h18" />
   
    <path d="M3 18h18" />
</svg>

      {/* Afficher les éléments supplémentaires lors du survol */}
      {isHovered && (
        <div className="absolute bottom-full  left-full transform  translate-x-2 bg-[#fcfefe] text-black p-2 rounded shadow-lg">
          <ul className="flex flex-col items-start">  {/* Aligner les éléments verticalement */}
          <li><img src=""className='w-12 h-12 rounded-full object-cover'/></li>
            <li className='justify-center'>{user.Nom_util}</li>
            <li role='button' onClick={onVuClick} className="p-2 hover:bg-gray-200 cursor-pointer">Gere un rapport</li>
            <li role='button' onClick={onContribuableClick} className="p-2 hover:bg-gray-200 cursor-pointer">contribuable</li>
            <li role='button' onClick={logoutUser} className="p-2 hover:bg-gray-200 cursor-pointer">Déconnexion</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingBox;
