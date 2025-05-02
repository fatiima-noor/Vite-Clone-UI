import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Main Content */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
