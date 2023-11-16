import { useState, useEffect,useRef } from 'react';
import sound from '../assets/Pokemon-Theme-Song.mp3';

function Navbar() {
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicOpen) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicOpen]);

  const toggleMusic = () => {
    setIsMusicOpen(!isMusicOpen);
  };

  return (
<div className='w-full p-6 mb-10 bg-red-500 flex justify-between items-center text-white'>
<span className="pl-10 text-3xl text-white"><span className="text-black">CloudNC</span> Pokédex Challenge</span>
  <button onClick={toggleMusic}>
    {isMusicOpen ? 'Pause Music' : 'Play Music'}
  </button>
  <audio ref={audioRef} src={sound} />
</div>
  );
}

export default Navbar;
