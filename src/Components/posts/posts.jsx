import React from 'react'
import Post from '../post/post'
import './posts.css'
import { useHistory } from 'react-router-dom';

export default function Posts() {
  const  history = useHistory();
  const blogKeys = JSON.parse(localStorage.getItem('blogKeys') || '[]');
  const goToPost = (blogKey) => {
    history.push(`/post/${blogKey}`);
  }

  return (
    <div className='posts'> 
  
      {blogKeys.map((blogKey) => (
        <>
        <div className='post' key={blogKey}>
          <div dangerouslySetInnerHTML={{ __html: localStorage.getItem(blogKey) }}></div>
          <button className='postButton' onClick={() => goToPost(blogKey)}> View Post </button>
        </div>
        </>
      ))}

    </div>
  )
}
