import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { LayoutProvider } from './core/context/layoutProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LayoutProvider>
    <App />
  </LayoutProvider>
)
