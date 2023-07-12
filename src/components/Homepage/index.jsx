import MediaQuery from "../../config/MediaQuery"

import Background from '../../assets/background.webp'
import AboutSection from "./Section/AboutSection"

const Homepage = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  return (
    <div>
      <div style={{backgroundImage: `url(${Background})`}} className={`${isMobile? "h-[60vh] -mt-20" : "h-[80vh] -mt-24"} w-screen  bg-cover bg-center bg-no-repeat`}/>
      <AboutSection isMobile={isMobile}/>
    </div>
  )
}

export default Homepage