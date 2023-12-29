import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import AdminRoutes from './routes/AdminRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  const role = 'public'

  return (
    <BrowserRouter>
      {
        role === 'admin' ? <AdminRoutes /> : <PublicRoutes />
      }
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </BrowserRouter>
  )
}

export default App;
