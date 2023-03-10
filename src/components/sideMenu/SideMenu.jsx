import "./sideMenu.css";
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';


function SideMenu() {
    return (
        <div className="sideMenu">
            <div className="sideMenuWrapper">
                <ul className="sideMenuList">
                    <li className="sideMenuListItem">
                        <HomeIcon className="sideMenuIcon" />
                        <span className="sideMenuListItemText">Home</span>
                    </li>
                </ul>

                <ul className="sideMenuList">   
                    <li className="sideMenuListItem">
                        <AssignmentTurnedInIcon className="sideMenuIcon" />
                        <span className="sideMenuListItemText">Tasks</span>
                    </li>
                </ul>
                
                <ul className="sideMenuList">
                    <li className="sideMenuListItem">
                        <ChatIcon className="sideMenuIcon" />
                        <span className="sideMenuListItemText">Chats</span>
                    </li>
                </ul>
                
            </div>
        </div>);
}

export default SideMenu;