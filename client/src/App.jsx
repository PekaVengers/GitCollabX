import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Collaborate from './pages/Collaborate';
import Projects from './pages/Projects';
import ProjectLayout from './components/ProjectLayout';
import ProjectTracking from './pages/project/ProjectTracking';
import ProjectCollaborators from './pages/project/ProjectCollaborators';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route element={<Layout />}>
      <Route path="profile" element={<Profile />} />
      <Route path="collaborate" element={<Collaborate />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:id" element={<ProjectLayout />}>
        <Route index element={<ProjectTracking />} />
        <Route path="collaborators" element={<ProjectCollaborators />} />
      </Route>
    </Route>
  </Route>
));

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
