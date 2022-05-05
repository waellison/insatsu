import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Post from './Post'
import Posts from './Posts'
import NavBar from './NavBar'
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <main className='container'>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/posts/:id" element={<Post />}/>
            <Route path="/posts/page/:pageNumber" element={<Posts />}/>
        </Routes>
      </main>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
)

