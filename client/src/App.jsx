import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Collaborate from './pages/Collaborate';
import UserRepository from './pages/UserRepository';
import RepoFiles from './pages/RepoFiles';
import ReadFile from './pages/ReadFiles';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route element={<Layout />}>
      <Route path="profile" element={<Profile />} />
      <Route path="collaborate" element={<Collaborate />} />
      <Route path="userrepo" element={<UserRepository />} />
      <Route path="repofiles" element={<RepoFiles />} />
      <Route path="readfiles" element={<ReadFile />} />
    </Route>
  </Route>
));

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
