import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { UserContextProvider } from './context/UserContext.tsx'
import { Outlet } from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './pages/Form.tsx';
import Profile from './pages/Profile.tsx'

const Layout = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <Outlet />
    </UserContextProvider>
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
        path: "/profile/:id",
        element: <Profile />
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
