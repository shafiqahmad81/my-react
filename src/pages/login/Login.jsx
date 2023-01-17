import Itemimages from "../../assets/images/man.jpg";
import Chart from "../../components/chart/Chart";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import List from "../../components/table/Table";
import "./login.scss";

const Login = () => {
  return (
    <div className='login'>
     <Sidebar/>
     <div className="loginContant">
      <Navbar/>
      <div className="top">
       <div className="left">
        <div className="editbutton">Edit</div>
        <h1 className="title">Information</h1>
        <div className="item">
         <img src={Itemimages} className="itemImage" alt="Man" />
         <div className="details">
          <h1 className="itemtitle">Jane Done</h1>
          <div className="detailsitem">
            <span className="itemkey">Email:</span>
            <span className="itemvalue">janedone@gmail.com</span>
          </div>  
          <div className="detailsitem">
            <span className="itemkey">Phone:</span>
            <span className="itemvalue">0123456789</span>
          </div>
          <div className="detailsitem">
            <span className="itemkey">Address:</span>
            <span className="itemvalue">Jamalpur shadar,Jamalpur</span>
          </div>
          <div className="detailsitem">
            <span className="itemkey">Country:</span>
            <span className="itemvalue">USA</span>
          </div>
         </div>
         </div>
       </div>
       <div className="right">
        <Chart/>
       </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List/>
      </div>
     </div>
    </div>
  )
}

export default Login