import Header from './components/Header';
import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import SubjectSearch from './components/SubjectSearch';
import Form from './components/Form';
import {Routes, Route, Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import CreateForm from './CreateForm';

function App() {
  const [page, setPage] = useState('');
  const navigate= useNavigate();

  function getActivity() {
    const url = "http://localhost:3000/";

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
       console.log(response)
      })
      .catch(console.error);
      
  }
  function handleClick(event) {
    event.preventDefault();
    getActivity();
  }
  return (
    
    <>
    <nav>
    <div className="App">
      

      <Link to='/'>
      <Header />
      </Link>
      
      </div>
    </nav>
  
      <Nav className="App"/>
      <CreateForm />
      <Content />
      <SubjectSearch handleClick={handleClick}/>
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
      
      </>
   
  );
}

export default App;
