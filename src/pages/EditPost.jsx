import React, {useState, useEffect} from 'react'
import {Container, PostForm} from '../components/index'
import appwriteService from '../appwrite/blogpost'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {

    const [post, setpost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setpost(post);
                }
            })
        } else{
            navigate('/');
        }
    }, [slug, navigate])

  return post ? (
    <div className="py-8">
        <Container>
            <PostForm />
        </Container>
    </div>
  ) : null
}

export default EditPost