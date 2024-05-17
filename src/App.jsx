import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import { login, logout } from './features/authSlice';
import { Outlet } from 'react-router-dom';
import {Header, Footer} from './components/index'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}));
      }
      else{
        //UserData was not found i.e user does not exists.
        dispatch(logout());
      }
    })
    .catch((error) => {
      console.log("Something went wrong in app.jsx :: ", error);
    })
    .finally(() => (
      setLoading(false)
    ))
  }, [])
  

  return  !loading ? (
    <div className="blog min-h-screen flex flex-wrap content-between">
      <div className='w-full'>
      <Header />
        <main> 
          TODO : Outlet{/* <Outlet /> */}
        </main>
      <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
