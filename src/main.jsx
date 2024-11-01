
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './router/routes.jsx'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const AppRoutes = () => {
  const element = useRoutes(Routes);
  return element;
}
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Provider store={store}>
    <AppRoutes />
  </Provider>
  </BrowserRouter>
)
