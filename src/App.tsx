import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import RootLayout from './components/RootLayout/RootLayout';
import About from './components/About/About';

import './App.scss';
import './custom.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
