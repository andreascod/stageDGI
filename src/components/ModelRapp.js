import Register_rapport from "../pages/Register_rapport";



export default function ModelRapp ({isVu,onClose}){
    if(!isVu) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">

     <div className="flex flex-col w-[50%]"> 
      <button onClick={onClose} className="place-self-end text-xl text-white">x</button>
      <div >
       <Register_rapport/>
      </div>
     </div>
      </div>
    );
}