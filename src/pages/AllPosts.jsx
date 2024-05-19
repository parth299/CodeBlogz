import React, {useState, useEffect} from 'react'
import {Container, PostCard} from '../components/index' 
import appwriteService from '../appwrite/blogpost'

function AllPosts() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getAllPost([])
    .then((posts) => {
      if(posts) {
        setPosts(posts.documents);

      }
    })
    .catch((err) => console.log("Error in allPosts.jsx :: ", err))
  }, [])

  return (
    <div className='w-full py-8'>
      <Container >
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard post={post} />
            </div>
          ))}
        </div>
        
      </Container>
    </div>
  )
}

export default AllPosts