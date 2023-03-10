import "./home.css" 
import Topbar from "../../components/topbar/Topbar"
import ProfileFeed from "../../components/profileFeed/ProfileFeed"
import SideMenu from "../../components/sideMenu/SideMenu"
import RightBar from "../../components/rightBar/RightBar"

export default function Home() {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
        <SideMenu/>
        <ProfileFeed/>
        <RightBar/>
      </div>
    </div>
  )
}