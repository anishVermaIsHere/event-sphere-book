import { AppErrorBoundary } from './routes/lazy-components'
import AppRoutePovider from '@/components/route-provider'
import './App.css'

function App() {

  return (
    <AppErrorBoundary>
      <AppRoutePovider />
    </AppErrorBoundary>
  )
}

export default App
