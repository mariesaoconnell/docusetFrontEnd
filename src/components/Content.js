import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Content({sessionPosts}) {
    const {id} = useParams(); // grabs the ID from the URL
    const [post, setPost] = useState('')

    useEffect(()=>{
        fetchById()
    },[])

    // GET LAST POST BY ID
    function fetchById(){
        let url = 'https://cheatsheetmern.herokuapp.com/cheatsheets/'+id;
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setPost(response);
            });
    }

    return (
        <div>
            <h1>Hello from Get Post By ID</h1>
            <h2>{post.title}</h2>
            <h3>{post.subject}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default Content;
