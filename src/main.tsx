import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'

const Layout = () => {
  return (
    <>
      <Navbar />
      <App />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)
