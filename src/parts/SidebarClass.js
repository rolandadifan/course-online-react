import React from 'react';

import { ReactComponent as ArrowBack } from 'assets/images/arrow-back.svg';

import { Link, withRouter } from 'react-router-dom';


function SidebarClass({ data,match,defaultUri }) {
    
    const getNavLinkClass = (path) => {
        return match.url === path || defaultUri === path ? "text-teal-500" : "text-indigo-500"
    }

    const list = []
    data.chapters.forEach((chapter,index) =>{
        list.push(<li key={`${chapter.course_id}-${index}`}>
            <span className="nav-header relative block py-3 px-5 bg-indigo-800 text-white text-left">{chapter?.name ?? "chapter name"}</span>
        </li>)
    if(chapter?.lessons?.length > 0)
    chapter.lessons.forEach((lesson,index) => {
        list.push(<li key={index}>
            <Link className={["relative flex items-center py-3 px-5 transition-all duration-200 w-full text-left hover:text-white truncate ...", getNavLinkClass(`/courses/${data.id}/${chapter.id}/${lesson.video}`)].join(" ")} to={`/courses/${data.id}/${chapter.id}/${lesson.video}`}>
                    {lesson?.name ?? "lesson name"}
                </Link>
        </li>)
    })
    })
    const [ToggleMenu, setToggleMenu] = React.useState(false)
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
                <ul className="main-menu mt-12 overflow-y-auto">
                        <li>
                            <Link className="relative flex items-center py-3 px-5 w-full text-left text-white mb-12  mt-10 md:mt-0" to="/">
                                <ArrowBack className="fill-white mr-2"></ArrowBack>
                                Back to home
                                </Link>
                        </li>
                        {list}
                </ul>
            </div>
        </aside>
    </>
    )
}

export default withRouter(SidebarClass)
