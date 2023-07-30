import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Collaborate from './pages/Collaborate';
import Discussion from './pages/Discussion';
import Projects from './pages/Projects';
import ProjectLayout from './components/ProjectLayout';
import FeatureTracking from './pages/project/FeatureTracking';
import ProjectCollaborators from './pages/project/ProjectCollaborators';
import PullRequests from './pages/project/PullRequests';
import ProjectCodebase, {loader as codebaseLoader} from './pages/project/ProjectCodebase';
import Premium from './pages/Premium';
import PremiumRequired from './pages/PremiumRequired';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route element={<Layout />}>
      <Route path="profile" element={<Profile />} />
      <Route path="collaborate" element={<Collaborate />} />
      <Route path="discussion" element={<Discussion />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:id" element={<ProjectLayout />}>
        <Route index element={<FeatureTracking />} />
        <Route path="collaborators" element={<ProjectCollaborators />} />
        <Route path="pulls" element={<PullRequests />} />
        <Route path="codebase" element={<ProjectCodebase />} loader={codebaseLoader} />
        <Route path="premium_required" element={<PremiumRequired />} />
      </Route>
      <Route path="premium" element={<Premium />} />
    </Route>
  </Route>
));

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
