
import { Link, NavLink} from "react-router-dom"
import "./Navbar.css"
import {logo} from  '../Images/Data'




export default function Navbar(){
    return <nav className="navbar">
        <div className="navbar-left">
            <Link to='/'><img src={logo} alt="Logo" class="navbar-logo"/></Link>
        </div>
        <div className="navbar-right">
           <NavLink  to={'/myresume'}> <button class="button-35">My Resume</button></NavLink>
           <NavLink to='/about'><button class="button-35">About</button></NavLink>
        </div>
    </nav>
}