import Header from './components/Header';
import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import SubjectSearch from './components/SubjectSearch';
import Form from './components/Form';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import CreateForm from './CreateForm';
import Home from './components/Home';

function App() {
  const [page, setPage] = useState('');
  const navigate= useNavigate();

  function getActivity() {
    const url = "https://zacs-book-e-api.herokuapp.com/";

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
    
    <div className="App">

      
      <Nav>
      <Link to='/'>
      <Header />
      </Link>
      <Link to='createsheet'>
      <h1>createsheet</h1>
      </Link>
      </Nav>
      </div>
    
  
      <Nav className="App"/>
      
      <Content />
      <SubjectSearch handleClick={handleClick}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='createsheet' element={<CreateForm/>} />
      </Routes>
      
      </>
   
  );
}

export default App;
