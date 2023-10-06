import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Content from '../components/content'

const Home = () => {
    const [content, setContent] = useState('Denuncia');

  return (
    <div className='flex'>
      <Navbar action={setContent} selected={content} />
      <div className='bg-[#f0f8ff] h-screen flex-grow'>
        { Content[content] }
      </div>
    </div>
  )
};

export default Home;