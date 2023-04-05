import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import "./styles.css";
import { ContextProvider } from '../store/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
