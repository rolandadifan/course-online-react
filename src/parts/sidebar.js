import React from 'react';

import { ReactComponent as DefaultUser } from 'assets/images/default-avatar1.svg';

import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import user from 'constan/api/users';

function Sidebar({ match, history }) {
    const getNavLinkClass = (path) => {
        return match.path === path ? "active text-white bg-indigo-900" : "text-indigo-500"
    }

    const [ToggleMenu, setToggleMenu] = React.useState(false)

    const users = useSelector(state => state.users);
    function logout() {
        user.logout().then(() => {
            localStorage.removeItem("BWAMICRO:token");
            history.push("/login");
        })
    }

    const sidebarStyle = {
        width:280, left:window.innerWidth < 640 && !ToggleMenu ? -280 : 0,
    }
    return (
        <>
        <div className="flex sm:hidden">
                 <button onClick={() => setToggleMenu(prev => !prev)} className={[
                    "toggle z-50", ToggleMenu ? "active" : ""
                ].join(" ")}>
                </button>
            </div>
        <aside className="bg-indigo-1000 max-h-screen h-screen overflow-y-auto transition-all duration-300 min-h-full fixed sm:relative z-50" style={sidebarStyle}>
            {ToggleMenu && <div className="overlay" onClick={() => setToggleMenu(prev => !prev)}></div>}
            <div className="max-h-screen h-screen fixed bg-indigo-1000 flex flex-col content-between" style={{ width: 280 }}>
                <div className="flex flex-col text-center mt-8">
                    <div className="border border-indigo-500 mx-auto p-2 rounded-full inline-flex mb-3">
                        <div className="rounded-full overflow-hidden">
                        {
                            users?.avatar ? <img className="object-cover w-24 h-24" src={users?.avatar} alt="" /> :
                                <DefaultUser className="fill-indigo-500" style={{ width: 90, height: 90 }} />
                        }
                    </div>
                    </div>
                    <h6 className="text-white text-xl">
                        {users?.name ?? "Username"} 
                    </h6>
                    <span className="text-indigo-500 text-sm">
                        {users?.profession ?? "User Proffession"} 
                    </span>
                    <ul className="main-menu mt-12">
                        <li>
                            <Link className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left", getNavLinkClass("/")].join(" ")} to="/">My Class</Link>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left text-indigo-500"].join(" ")} href={`${process.env.REACT_APP_FRONTPAGE_URL}/courses`}>Library</a>
                        </li>
                        <li>
                            <Link className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left text-indigo-500"].join(" ")} to="/transaction">Transactions</Link>
                        </li>
                        <li>
                            <Link className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left", getNavLinkClass("/settings"),].join(" ")} to="/settings">
                                Settings
                            </Link>
                        </li>
                    </ul>
                    <div className="my-auto"></div>
                    <ul className="main-menu mt-12">
                        <li>
                            <button className={["nav-link relative text-indigo-500 flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left"].join(" ")} onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        </>
    )
}

export default withRouter(Sidebar)
