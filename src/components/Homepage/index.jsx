import MediaQuery from "../../config/MediaQuery"

import Background from '../../assets/background.webp'
import AboutSection from "./Section/AboutSection"
import BeritaSection from "./Section/BeritaSection"
import PengumumanSection from "./Section/PengumumanSection"
import RisetSection from "./Section/RisetSection"

const Homepage = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  return (
    <div>
      <div style={{backgroundImage: `url(${Background})`}} className={`${isMobile? "h-[60vh] -mt-20" : "h-[80vh] -mt-24"} w-screen  bg-cover bg-center bg-no-repeat`}/>
      <AboutSection isMobile={isMobile}/>
      <BeritaSection isMobile={isMobile}/>
      <PengumumanSection isMobile={isMobile}/>
      <RisetSection isMobile={isMobile}/>
    </div>
  )
}

export default Homepage