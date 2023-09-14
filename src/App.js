import  {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';


import { lazy, Suspense } from 'react';
const About = lazy(() => import( './components/About/About'));
const Portfolio = lazy(() => import( './components/Portfolio/Portfolio'));
const Contact = lazy(() => import( './components/Contact/Contact'));
const NotFound = lazy(() => import( './components/NotFound/NotFound'))


function App() {

  const routes = createBrowserRouter([{
    path: '', element: <Layout></Layout>,
    children: [
      {index:true, element:<Home></Home>},
      {path: 'about', element:<Suspense fallback={<h1>Loading</h1>}><About></About></Suspense>},
      {path: 'portfolio', element:<Suspense fallback={<h1>Loading</h1>}><Portfolio></Portfolio></Suspense>},
      {path: 'contact', element:<Suspense fallback={<h1>Loading</h1>}><Contact></Contact></Suspense>},
      {path: 'contact', element:<Suspense fallback={<h1>Loading</h1>}><Contact></Contact></Suspense>},
      {path: '*', element:<Suspense fallback={<h1>Loading</h1>}><NotFound></NotFound></Suspense>},
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
