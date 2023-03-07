import { useState } from "react"
import { Link } from "react-router-dom"

import {
    AiOutlineSetting,
    AiOutlineHome,
    AiOutlineAppstore
} from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { BiCommentDetail } from "react-icons/bi"
import {
    BsInfoSquare,
    BsMortarboard
} from "react-icons/bs"
import {
    IoMdNotificationsOutline,
    IoIosArrowBack,
    IoIosArrowForward,
} from "react-icons/io"


export function Aside() {
    const listMenu = [
        {
            title: "Home",
            icon: <AiOutlineHome />,
            path: "home"
        },
        {
            title: "Projetos",
            icon: <AiOutlineAppstore />,
            path: "projetos"
        },
        {
            title: "Educação",
            icon: <BsMortarboard />,
            path: "educacao"
        },
        {
            title: "Sobre",
            icon: <BsInfoSquare />,
            path: "sobre"
        },
    ]

    const listMenuProfile = [
        {
            title: "Mensagens",
            icon: <BiCommentDetail />,
            path: "Mensagens"
        },
        {
            title: "Notificação",
            icon: <IoMdNotificationsOutline />,
            path: "notificacao"
        },
        {
            title: "Configuração",
            icon: <AiOutlineSetting />,
            path: "configuracao"
        },
        {
            title: "Perfil",
            icon: <CgProfile />,
            path: "profile"
        },
    ]

    const [sidebarActive, setSidebarActive] = useState(false)

    return <aside
        className={`asider relative flex h-full p-5 flex-col justify-between mr-4 ease-in-out duration-300 border-r-2 border-gray-200  ${sidebarActive ? "w-[70px]" : "w-[280px]"}`}
    >
        <div className="container">
            <div
                className="logo_wrapper p-2"
            >
                <div className="logo flex items-center gap-4">
                    <div className={`w-9 absolute left-6`}>
                        <img
                            src="/logo.png"
                            className=""
                            alt=""
                        />
                    </div>
                    <span
                        className={`text-[24px] flex flex-nowrap
                            ${sidebarActive ? "opacity-0 hidden" : "opacity-100 ml-10"}`
                        }
                    >
                        Meu Portifolio
                    </span>
                </div>

                <div
                    className="nav_toggle flex items-center justify-center absolute top-8 -right-3 bg-[#2d68ff] text-white rounded-full w-6 h-6 text-[16px] cursor-pointer ease-in-out duration-300"
                    onClick={() => { setSidebarActive(!sidebarActive) }}
                >
                    {sidebarActive
                        ? <IoIosArrowForward />
                        : <IoIosArrowBack />
                    }

                </div>
            </div>
        </div>
        <div
            className="nav_menu flex flex-col items-start gap-28 h-full justify-between"
        >
            <ul
                className="nav_list flex flex-col gap-2 w-full mt-5"
            >
                {listMenu.map(item => <li
                    className="relative group w-full ease-in-out duration-300 hover:bg-[#eff6ff] hover:rounded-md"
                    key={item.path}
                >
                    <Link
                        className={`nav_link-wrapper flex p-3 items-center ease-in-out gap-3 duration-300`}
                        to={item.path}
                    >
                        <span className="group-hover:text-[#2d68ff] text-2xl">{item.icon}</span>
                        <span
                            className={`links_name text-xl text-[#324054] ease-in-out duration-300 group-hover:text-[#2d68ff] 
                                ${sidebarActive ? "opacity-0" : "opacity-100"}`
                            }
                        >{item.title}</span>
                    </Link>
                    {sidebarActive
                        ?
                        <span
                            className={`tooltip top-5 z-1 bg-[#324054] shadow py-1 px-3 rounded text-[12px] text-white ease-in-out duration-300 opacity-0 absolute group-hover:opacity-100 -right-20`}
                        >
                            {item.title}
                        </span>
                        :
                        null
                    }
                </li>
                )}
            </ul>
            <ul
                className="nav_list flex flex-col gap-2 w-full"
            >
                {listMenuProfile.map(item => <li
                    className="relative group w-full ease-in-out duration-300 hover:bg-[#eff6ff] hover:rounded-md"
                    key={item.path}
                >
                    <Link
                        className="nav_link-wrapper flex p-3 items-center ease-in-out gap-3 duration-300"
                        to={item.path}
                    >
                        <span className="group-hover:text-[#2d68ff] text-2xl">{item.icon}</span>
                        <span
                            className={`links_name text-xl text-[#324054] ease-in-out duration-300 group-hover:text-[#2d68ff] 
                                ${sidebarActive ? "opacity-0" : "opacity-100"}`
                            }
                        >{item.title}</span>
                    </Link>
                    {sidebarActive
                        ?
                        <span
                            className={`tooltip top-5 z-1 bg-[#324054] shadow py-1 px-3 rounded text-[12px] text-white ease-in-out duration-300 opacity-0 absolute group-hover:opacity-100 left-20`}
                        >
                            {item.title}
                        </span>
                        :
                        null
                    }
                </li>
                )}
            </ul>
        </div>
    </aside>
}

