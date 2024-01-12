import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Error from './pages/Error.tsx'
import About from './pages/About.tsx'
import Layout from './layouts/Layout.tsx'
import Projects from './pages/Projects.tsx'
import Project from './pages/Project.tsx'
import CVitae from './pages/CVitae.tsx'

const router = createHashRouter([
  {
    path: "/",
    element:
      <Layout title={'Home'}>
        <Home />
      </Layout>,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element:
      <Layout title={'About'}>
        <About />
      </Layout>,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element:
      <Layout title={'Projects'}>
        <Projects />
      </Layout>,
    errorElement: <Error />,
  },
  {
    path: "/projects/:id",
    element:
      <Layout title={'Projects'}>
        <Project />
      </Layout >,
    errorElement: <Error />,
  },
  {
    path: "/curriculum-vitae",
    element: <CVitae />,
    errorElement: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
