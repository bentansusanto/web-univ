/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"


const RisetSection = ({isMobile}) => {
  return (
    <div className={`${isMobile? "block mt-16 space-y-5 pb-10" : "flex items-center space-x-14 mt-20 mx-20 pr-20"} bg-yellow-400`}>
        <img src="https://www.ui.ac.id/wp-content/uploads/2022/12/home_riseetinov.jpg" alt="bg-riset-section" className={`${isMobile? "" : "w-[45vw]"}`}/>
        <div className={`${isMobile&&"mx-3"} space-y-5`}>
            <h4 className={`${isMobile ? "text-2xl" : "text-4xl"} font-semibold`}>Riset dan Inovasi</h4>
            <p>Kontribusi UI bagi Indonesia dan komitmennya untuk menjadi Guru Bangsa melalui penyelenggaraan Tridharma Perguruan Tinggi menjadi pendorong bagi UI untuk terus berperan aktif dan memberikan kontribusi dalam mengatasi permasalahan bangsa. </p>
            <p>Penyelenggaraan kegiatan riset dan inovasi bagi sivitas akademika UI secara internal dan eksternal adalah wujud sumbangsih UI dalam pemikiran dan kerja nyata dalam mengatasi permasalahan global yang menjadi fokus pembangunan berkelanjutan (Sustainable Development Goals). </p>
            <Link to={'/riset-inovasi'} className="flex items-center space-x-2 font-semibold pt-8">
                <p>Selengkapnya</p>
                <BsArrowRight className="text-xl"/>
            </Link>
        </div>
    </div>
  )
}

export default RisetSection