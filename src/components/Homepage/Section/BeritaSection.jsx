/* eslint-disable react/prop-types */

import { newsDatas } from "../../../data/listData"
import { Link } from "react-router-dom"
import {BsArrowRight} from 'react-icons/bs'

const BeritaSection = ({isMobile}) => {
  return (
    <div className={`${isMobile ? "block space-y-10 mx-3 mt-16" : "flex space-x-10 mt-24 mx-20"}`}>
        {/* Campus Video */}
        <div>
            <h4 className="font-semibold">Campus Video</h4>
            <div className="bg-yellow-400 w-full my-3 h-[3px]"/>
            <iframe  className={` ${isMobile ? "w-full" : "w-96"}  h-56`} src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </div>
        <div>
            <h4 className="font-semibold">Berita Kampus & Update</h4>
            <div className="bg-yellow-400 w-full my-3 h-[3px]"/>
            <div className={`${isMobile? "grid-cols-1 gap-y-5" : "grid-cols-2 gap-5"} grid`}>
                {
                  newsDatas.map((news, idx) => (
                    <div key={idx} className="flex space-x-3">
                        <img src={news.images_news} alt={news.images_news} className="w-24"/>
                        <div className="space-y-1">
                          <p className="text-gray-400 text-sm">{news.date_news}</p>
                          <h4 className="font-semibold">{news.title_news}</h4>
                        </div>
                    </div>
                  ))
                }
            </div>
            <Link to={'/berita'} className="flex items-center space-x-2 mt-6 font-semibold hover:text-yellow-400">
                <p>Berita Selengkapnya</p>
                <BsArrowRight className="text-xl text-black"/>
            </Link>
        </div>
    </div>
  )
}

export default BeritaSection