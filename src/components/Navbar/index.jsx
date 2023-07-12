import MediaQuery from "../../config/MediaQuery"
import Logo from '../../assets/logo.svg'
import {BiMenu} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'
import {FiChevronLeft} from 'react-icons/fi'
import { People, academic, navMenu, newsAnouncement, risetInovasi } from "../../data/listMenu"
import { Link } from "react-router-dom"
import { useState } from "react"
const Navbar = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  const [selectNav, setSelectNav] = useState(0)
  const [openNav, setOpenNav] = useState(false)
  const [openDetailNav, setOpenDetailNav] = useState(false)
  
  const handleSelectNav = (link) => {
    setSelectNav(link)
    if(!isMobile){
      setOpenNav(true)
    }
  }

  const handleOpenDetailNav = () => {
    setOpenDetailNav(true)
  }
  

  return (
    <div>
      {
        isMobile ? 
        // Mobile Device
        (<>
          <div className="flex items-center py-4 px-3 justify-between">
          <Link to={'/'}>
            <img src={Logo} alt="logo" className="w-32"/>
          </Link>
          <BiMenu onClick={() => setOpenNav(true)} className="text-2xl text-white"/>
        </div>
        <div className={`${openNav ? "h-screen w-screen" : "h-0 opacity-0 w-0"} bg-black fixed top-0 transition-all ease-linear duration-300 py-5 px-3`}>
          <div className="flex items-center">
            <IoClose onClick={() => (setOpenDetailNav(true) ? setOpenNav(true) : setOpenNav(false))} className="text-white text-2xl"/>
            <img src={Logo} alt="logo" className={`${!openNav&&"hidden"} w-32 mx-auto`}/>
          </div>
          <div className="bg-gray-600 h-[1px] w-full my-8"/>
          <ul className="relative space-y-3">
            {
              navMenu.map((val, idx) => (
                <li key={idx} className="text-white">
                  <div onClick={() => handleSelectNav(val.link)} className="flex items-center space-x-2">
                    <Link onClick={() => setOpenNav(false)}  to={val.link}>{val.page.length > 17 ? val.page.slice(0, 7) : val.page}</Link>
                    <div onClick={handleOpenDetailNav}>
                      <FiChevronLeft  className={` ${val.link === '/campus' || val.link === '/about' ? "hidden" : null} rotate-180 text-sm`}/>
                    </div>
                  </div>
                  <div className={`${openDetailNav && selectNav == val.link ? "opacity-100 h-screen w-44" : "opacity-0 w-0 h-screen"} ${val.link === '/campus' || val.link === '/about'? "hidden" : null} bg-gray-100 fixed top-0 right-0 py-7 space-y-5 px-3 transition-all ease-linear duration-300`}>
                  <FiChevronLeft onClick={() => setOpenDetailNav(false)} className={`${!openDetailNav&&"hidden"} text-xl text-black mb-20`}/>
                  <div className={`${!openDetailNav&&"hidden"} space-y-5`}>
                    {
                      val.link === '/academic' ? (academic.map((list, idx) => (
                        <div onClick={() => setOpenNav(false)} key={idx}>
                          <Link to={list.link} className="text-black">{list.page}</Link>
                        </div>
                      ))) : val.link === '/riset-inovasi' ? (risetInovasi.map((list, idx) => (
                        <div onClick={() => setOpenNav(false)} key={idx}>
                          <Link to={list.link} className="text-black">{list.page}</Link>
                        </div>
                      ))) : val.link === '/people' ? (People.map((list, idx) => (
                        <div onClick={() => setOpenNav(false)} key={idx}>
                          <Link to={list.link} className="text-black">{list.page}</Link>
                        </div>
                      ))) : val.link === '/news-anouncement'&& newsAnouncement.map((list, idx) => (
                        <div onClick={() => setOpenNav(false)} key={idx}>
                          <Link to={list.link} className="text-black">{list.page}</Link>
                        </div>
                      ))
                  }
                  </div>
            </div>
                </li>
              ))
            } 
          </ul>
        </div>
        </>) : 
        // Desktop Device
        (<div className="flex items-center py-4 px-20">
          <Link to={'/'}>
            <img src={Logo} alt={Logo}/>
          </Link>
            <ul className="flex space-x-8 relative ml-auto">
              {
                navMenu.map((val, idx) => (
                  <li key={idx} onMouseEnter={() => handleSelectNav(val.link)} className="text-white">
                    <Link to={val.link} className="hover:text-yellow-400">
                      {val.page}
                    </Link> 
                    <div onMouseLeave={() => setOpenNav(false)}   className={`${openNav&&selectNav === val.link ?"opacity-100":"opacity-0 top-12"} ${val.link === '/campus'&&"hidden"} ${val.link === '/about'&&"hidden"} bg-black rounded-md space-y-2 w-52 p-3 absolute top-10 transition-all ease-linear duration-200 w=52`}>
                      
                        {
                          val.link === '/academic' ? (academic.map((list, idx) => (
                            <div onClick={() => setOpenNav(false)} key={idx}>
                              <Link to={list.link} className="hover:text-yellow-400">{list.page}</Link>
                            </div>
                          ))) : val.link === '/riset-inovasi' ? (risetInovasi.map((list, idx) => (
                            <div onClick={() => setOpenNav(false)} key={idx}>
                              <Link to={list.link} className="hover:text-yellow-400">{list.page}</Link>
                            </div>
                          ))) : val.link === '/people' ? (People.map((list, idx) => (
                            <div onClick={() => setOpenNav(false)} key={idx}>
                              <Link to={list.link} className="hover:text-yellow-400">{list.page}</Link>
                            </div>
                          ))) : val.link === '/news-anouncement'&& newsAnouncement.map((list, idx) => (
                            <div onClick={() => setOpenNav(false)} key={idx}>
                              <Link to={list.link} className="hover:text-yellow-400">{list.page}</Link>
                            </div>
                          ))
                        }
                    </div>      
                  </li>
                ))
              }
              
            </ul>
        </div>)
      }
    </div>
  )
}

export default Navbar