import Navbar from '../Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Topnavbar from '../Shared/Topnavbar'

const Roote = () => {
  return (
    <>
    <Topnavbar></Topnavbar>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Roote