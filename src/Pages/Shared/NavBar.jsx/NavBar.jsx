import { Link } from "react-router-dom";
import logo from '../../../assets/assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
        .then(() => {})
        .catch(err => console.log(err))
    }

    const links = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link>About</Link>
        </li>
        {
            user?.email ? <li>
                <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
            </li> : <li>
                <Link to="/login">Login</Link>
            </li>
        }
        {
            user?.email ? <>
            <Link to="/bookings">My Booking</Link>
            </> : ""
        }


    </>

    return (
        <div className="navbar bg-base-100 h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-error btn-outline">Appointment</Link>
            </div>
        </div>
    );
};

export default NavBar;