import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from './Utils/Appstore';
import Login from './Components/Login';
import Browse from './Components/Browse';


function App() {
  const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
    {
        path : "/browse",
        element : <Browse/>
    }
])

  return (
    <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
    <Body/>
    </Provider>
  );
}

export default App;
