import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Layout from './components/Layout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
));

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
