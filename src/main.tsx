import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { Outlet } from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './pages/Form.tsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/login",
        element: <Form />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
