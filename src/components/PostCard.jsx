import React from 'react'
import service from '../appwrite/blogpost'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage,}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-blue-500 rounded-xl p-4'>
        <div className="w-full justify-center mb-4">
          <img src={service.getFilePreview(featuredImage)} alt="" />
        </div>
        <h2>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard