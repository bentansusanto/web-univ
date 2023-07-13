import MediaQuery from "../../config/MediaQuery"
import LogoUI from "../../assets/logo-ui.svg"
import {MdEmail} from 'react-icons/md'
import {BsTelephone, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'
import {TfiYoutube} from 'react-icons/tfi'
import { Link } from "react-router-dom"

const socialMedia = [
    {icon: <FaFacebookF/>, link:"facebook.com"},
    {icon: <BiLogoLinkedin/>, link:"linkedin.com"},
    {icon: <BsTwitter/>, link:"twitter.com"},
    {icon: <TfiYoutube/>, link:"youtube.com"},
    {icon: <BsInstagram/>, link:"instagram.com"},
]

const Footer = () => {
    const isMobile = MediaQuery("(max-width: 600px)")
    return (
    <div className={` ${isMobile ? "px-3 py-5 block space-y-16" : "px-52 py-10 flex space-x-32"} bg-black w-full text-white`}>
        <img src={LogoUI} alt="logo-ui" className={`${isMobile&&" mx-auto"} w-40`}/>
        <div className="space-y-8">
            <div className="space-y-2">
                <p className="font-semibold">Kampus Baru Depok</p>
                <p className={`${!isMobile&&"w-[50%]"} font-thin`}>Universitas Indonesia Jawa Barat 16424 Indonesia</p>
            </div>
            <div className="space-y-3">
                <div className="flex items-center space-x-2">
                    <MdEmail className="text-xl"/>
                    <p>sipp@ui.ac.id / humas-ui@ui.ac.id</p>
                </div>
                <div className="flex items-center space-x-2">
                    <BsTelephone className="text-xl"/>
                    <p>sipp@ui.ac.id / humas-ui@ui.ac.id</p>
                </div>
                {/* Social Media */}
            </div>
                <ul className="flex space-x-5 items-center">
                   {
                    socialMedia.map((list, idx) => (
                        <li key={idx}>
                            <Link to={list.link} className="text-xl">
                                {list.icon}
                            </Link>
                        </li>
                    ))
                   } 
                </ul>
        </div>
        <div className="space-y-2">
            <p>Fasilitas</p>
            <p>Mitra</p>
            <p>Karir</p>
        </div>
    </div>
  )
}

export default Footer