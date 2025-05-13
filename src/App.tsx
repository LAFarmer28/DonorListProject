import 'devextreme/dist/css/dx.material.blue.light.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainPageRouter from './Router/MainPageRouter';





function App() {

  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <MainPageRouter />
    </BrowserRouter>
  )
}

export default App
