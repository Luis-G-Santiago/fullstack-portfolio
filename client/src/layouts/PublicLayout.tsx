import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function PublicLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}

export default PublicLayout