import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen ,setIsOpen] = useState(false);

  const toggleModal = ()=>{
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="bg-black px-10 py-4 shadow-xl rounded cursor-pointer text-white text-xl" onClick={toggleModal}>Toggle Modal !</div>

      {isOpen && (
      <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0">
        <div className='w-screen h-screen bg-black/70 absolute top-0 left-0' onClick={toggleModal}></div>
        <div className="bg-white px-20 py-10 text-3xl rounded absolute shadow-lg font-semibold">Hello World</div>
      </div>
      )}
      
    </div>
  );
}

export default App;
