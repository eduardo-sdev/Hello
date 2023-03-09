import { useState } from "react"
import { Link } from "react-router-dom"

import {
    AiOutlineSetting,
    AiOutlineHome,
    AiOutlineAppstore,
    AiOutlineMail,
    AiOutlineLink
} from "react-icons/ai"
import {
    BiCommentDetail,
} from "react-icons/bi"
import {
    BsInfoSquare,
    BsMortarboard,
} from "react-icons/bs"
import {
    IoMdNotificationsOutline,
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosLogIn
} from "react-icons/io"

import { useAuthContext } from '../../context/AuthContext'

export function Aside({ id_user, section }) {
    const { user } = useAuthContext()

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
        {
            title: "Links",
            icon: <AiOutlineLink />,
            path: "links"
        },
        {
            title: "Contato",
            icon: <AiOutlineMail />,
            path: "contato"
        },
    ]

    const listMenuUser = [
        {
            title: "Mensagens",
            icon: <BiCommentDetail />,
            path: "mensagens"
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
                    <Link
                        to="/landingpage"
                        className={`w-9 absolute left-6`}
                    >
                        <img
                            src="/logo.png"
                            className=""
                            alt=""
                        />
                    </Link>
                    <span
                        className={`text-[24px] font-bold
                            ${sidebarActive ? "opacity-0 hidden" : "opacity-100 ml-10"}`
                        }
                    >
                        user name
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
                        to={`/portfolio/${id_user}/${item.path}`}
                    >
                        <span
                            className={`group-hover:text-[#2d68ff] text-2xl
                                ${section === item.path ? "text-[#2d68ff]" : ""}
                            `}
                        >
                            {item.icon}
                        </span>
                        <span
                            className={`links_name text-xl ease-in-out duration-300 group-hover:text-[#2d68ff] 
                                ${sidebarActive ? "opacity-0" : "opacity-100"}
                                ${section === item.path ? "text-[#2d68ff]" : "text-[#324054]"}`
                            }
                        >{item.title}</span>
                    </Link>
                    {sidebarActive
                        ?
                        <span
                            className={`tooltip z-1 bg-[#324054] shadow py-1 px-3 rounded text-[12px] text-white ease-in-out duration-300 opacity-0 absolute top-5 group-hover:top-3 group-hover:opacity-100 left-14`}
                        >
                            {item.title}
                        </span>
                        :
                        null
                    }
                </li>
                )}
            </ul>
            <div>
                {user ? <ul
                    className="nav_list flex flex-col gap-2 w-full"
                >
                    {listMenuUser.map((item, index) => <li
                        className="relative group w-full ease-in-out duration-300 hover:bg-[#eff6ff] hover:rounded-md"
                        key={item.path + index}
                    >
                        <Link
                            className="nav_link-wrapper flex p-3 items-center ease-in-out gap-3 duration-300"
                            to={`/perfil/${item.path}`}
                        >
                            <span
                                className={`group-hover:text-[#2d68ff] text-2xl
                                ${section === item.path ? "text-[#2d68ff]" : ""}
                            `}
                            >
                                {item.icon}
                            </span>
                            <span
                                className={`links_name text-xl  ease-in-out duration-300 group-hover:text-[#2d68ff] 
                                ${sidebarActive ? "opacity-0" : "opacity-100"}
                                ${section === item.path ? "text-[#2d68ff]" : "text-[#324054]"}`
                                }
                            >{item.title}</span>
                        </Link>
                        {sidebarActive
                            ? <span
                                className={`tooltip z-1 bg-[#324054] shadow py-1 px-3 rounded text-[12px] text-white ease-in-out duration-300 opacity-0 absolute top-5 group-hover:top-3 group-hover:opacity-100 left-14`}
                            >
                                {item.title}
                            </span>
                            : null
                        }
                    </li>
                    )}
                </ul>
                    : null}
                <div
                    className="relative group w-full ease-in-out duration-300 hover:bg-[#eff6ff] hover:rounded-md"
                >
                    <Link
                        className="nav_link-wrapper flex p-3 items-center ease-in-out gap-3 duration-300"
                        to={user ? `/perfil/usuario` : "/register-login"}
                    >
                        <span className="group-hover:text-[#2d68ff] text-2xl">
                            {user
                                ? <img
                                    className="w-7 h-7 rounded-full text-[7px] flex"
                                    src={user.user_metadata.avatar_url}
                                    onError={(e) => {
                                        e.target.src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                                    }}
                                />
                                : <IoIosLogIn />
                            }
                        </span>
                        <span
                            className={`links_name text-xl text-[#324054] ease-in-out duration-300 group-hover:text-[#2d68ff] 
                                ${sidebarActive ? "opacity-0" : "opacity-100"}`
                            }
                        >
                            {user ? user.user_metadata.full_name : "Entrar/Registar"}
                        </span>
                    </Link>

                    {sidebarActive
                        ? <span
                            className={`tooltip z-1 bg-[#324054] shadow py-1 px-3 rounded text-[12px] text-white ease-in-out duration-300 opacity-0 absolute top-5 group-hover:top-3 group-hover:opacity-100 left-14`}
                        >
                            {user ? user.user_metadata.full_name : "Entrar/Registar"}
                        </span>
                        : null
                    }
                </div>
            </div>
        </div>
    </aside>
}

