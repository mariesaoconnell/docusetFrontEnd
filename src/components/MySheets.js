import React, {useState} from 'react';
import {useEffect} from 'react';
import MySheet from './MySheet';

function MySheets({sheets, getActivity}) {
    useEffect(()=>{
        getActivity()
    },[])

    return (
        <div>
            <h1>My Sheets</h1>

            {sheets.map((sheet)=>{
                return <MySheet sheet={sheet} key={sheet._id}/>
            })}

        </div>
    );
}

export default MySheets;
