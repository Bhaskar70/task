import { Outlet, Link } from "react-router-dom";
import "./App.css"
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <li>
            <Link to="/">home</Link>
           </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
export default Layout;