import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {userLogout} from "../store/reducers/user/ActionCreators";

export const navLinks = [
    {
        id: "catalog",
        title: "Catalog",
    }
];

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const userState = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/">
                            Toolkit
                        </Link>

                        <button
                            className="text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent  lg:hidden outline-none focus:outline-none flex justify-center items-center	"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {!navbarOpen && <FontAwesomeIcon size={"lg"} color={"white"} icon={faBars}/>}
                            {navbarOpen && <FontAwesomeIcon size={"lg"} color={"white"} icon={faXmark}/>}
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {navLinks.map((link, k) => <li className="nav-item" key={link.id}>
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to={`/${link.id}`}
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                                    <span className="ml-2">{link.title}</span>
                                </Link>
                            </li>)}
                            {!userState?.user?.id && <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to={`/authentication`}
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                                    <span className="ml-2">Login</span>
                                </Link>
                            </li>}
                            {userState?.user?.id && <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href={`/`}
                                    onClick={_ => dispatch(userLogout())}
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                                    <span className="ml-2">Logout</span>
                                </a>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;