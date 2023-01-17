import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import "./sidebar.scss";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">lamadmin</span>
        </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <div className="title">MAIN</div>
                
                <Link to="/" style={{textDecoration: "none"}}>
                  <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                  </li>
                </Link>
                <div className="title">LIST</div>
                
                <Link to="/login" style={{textDecoration: "none"}}>
                  <li>
                    <Person2OutlinedIcon className="icon"/>
                    <span>Users</span>
                  </li>
                </Link>
                <Link to="/list" style={{textDecoration: "none"}}>
                  <li>
                    <StoreMallDirectoryOutlinedIcon className="icon"/>
                    <span>Products</span>
                  </li>
                </Link>
                <li>
                  <CreditCardOutlinedIcon className="icon"/>
                  <span>Orders</span>
                </li>
                <li>
                  <AirportShuttleOutlinedIcon className="icon"/>
                  <span>Deliverys</span>
                </li>
                <li>
                  <InsertChartIcon className="icon"/>
                  <span>Stats</span>
                </li>
                <div className="title">SERVICE</div>
                <li>
                  <NotificationsNoneOutlinedIcon className="icon"/>
                  <span>Notifications</span>
                </li>
                <li>
                  <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                  <span>System Health</span>
                </li>
                <li>
                  <PsychologyOutlinedIcon className="icon"/>
                  <span>Logs</span>
                </li>
                <li>
                  <SettingsOutlinedIcon className="icon"/>
                  <span>Settings</span>
                </li>
                <div className="title">USER</div>
                <li>
                  <AccountCircleOutlinedIcon className="icon"/>
                  <span>Profiles</span>
                </li>
                <li>
                  <ExitToAppOutlinedIcon className="icon"/>
                  <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar