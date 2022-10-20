import Header from './components/Header';
import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import SubjectSearch from './components/SubjectSearch';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      
      <Form />
      <Content />
      <SubjectSearch />
      
    </div>
  );
}

export default App;
