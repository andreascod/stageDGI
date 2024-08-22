
import Reg from "../pages/Register_Contribuable";

export default function Modal ({isVisible,onClose}){
    if(!isVisible) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">

     <div className="flex flex-col w-[80%]"> 
      <button onClick={onClose} className="place-self-end text-xl text-white">x</button>
      <div >
       <Reg/>
      </div>
     </div>
      </div>
    );
}