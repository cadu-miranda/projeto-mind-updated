import Main from './routes'
import Notifier from './components/ToastNotifier'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

export default function App() {
  return (
    <>
      <Main />
      <Notifier />
    </>
  )
}
