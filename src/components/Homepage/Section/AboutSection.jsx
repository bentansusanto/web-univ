/* eslint-disable react/prop-types */

import { dataAbout } from "../../../data/listData"
import { Link } from "react-router-dom"
import {BsArrowRight} from 'react-icons/bs'

const AboutSection = ({isMobile}) => {
  return (
    <div className={`${isMobile? "grid-cols-1 mx-3 " : "grid-cols-3 mx-52"} grid -mt-10 shadow-md`}>    
            {
                dataAbout.map((list, idx) => (
                    <div key={idx} className="bg-white">
                        <div className="bg-yellow-300 flex items-center space-x-8 p-5">
                            <img src={list.icon} alt={list.icon}/>
                            <div className="space-y-3">
                                <h4 className="text-xl font-semibold">{list.title}</h4>
                                <div className="flex items-center space-x-2">
                                <Link to={list.link} className="text-sm">Selengkapnya</Link>    
                                   <BsArrowRight className="text-xl"/> 
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 pb-5">
                            <img src={list.images} alt={list.images} />
                            {
                                list.sort_desc.map((val, idx) => (
                                    <p key={idx} className="px-2">{val}</p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default AboutSection