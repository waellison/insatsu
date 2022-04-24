import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import Post from './Post'
import Posts from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/posts/:id" element={<Post />}/>
        <Route path="/posts/page/:pageNumber" element={<Posts />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

