import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import CreateForm from './CreateForm';
import MySheets from './MySheets';
import SubjectSearch from './SubjectSearch';



function Nav(props) {
    return (
        
        <div>
           
            <Link to='/MySheets'>
            <h3>My Sheets</h3>
            </Link>
            <Link to='/create'>
            <h3>Create Sheet</h3>
            </Link>

            <Routes>
                <Route path='/MySheets' element={<MySheets/>}/>
                <Route path='/subjectsearch' element={SubjectSearch}/>
                <Route path='/create' element ={<CreateForm/>}/>
            </Routes>
           
        </div>
    );
}

export default Nav;