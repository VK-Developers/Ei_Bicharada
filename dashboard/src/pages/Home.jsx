import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Content from '../components/content'
import Header from '../components/Header';
const Home = () => {
    const [content, setContent] = useState('Denuncia');

  return (
    <div className='flex bg-[#f0f8ff] ' >
      <Navbar action={setContent} selected={content} />
      <div className='flex-col flex-grow'>
        <Header />
        <div className=''>
        { Content[content] }
      </div>
      </div>
    </div>
  )
};

export default Home;