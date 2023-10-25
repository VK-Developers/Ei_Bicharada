import { useState} from 'react';
import Navbar from '../components/Navbar';
import Content from '../components/content'
import Header from '../components/Header';
const Home = () => {
    const [content, setContent] = useState('Denuncia');

    
  return (
    <div className='flex' >
      <Navbar action={setContent} selected={content} />
      <div className='flex-col flex flex-grow'>
        <Header  />
        <div className='flex-grow'>
        { Content[content] }
      </div>
      </div>
    </div>
  )
};

export default Home;