
import "./profileFeed.css";
import ProfileCard from "../profileCard/ProfileCard";
export default function ProfileFeed() {

  return (
    <div className="profileFeed">
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
    </div>
  );
}