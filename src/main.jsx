import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router';
import { ContextApi } from './ContextApi/ContextApi';
import { Provider } from 'react-redux';
import { store } from './Store';
createRoot(document.getElementById('root')).render(

   <Provider store={store}>
    <ContextApi>
    <div className=''>
      <RouterProvider router={router} />
    </div>
    </ContextApi>
  </Provider>

 
  
)
