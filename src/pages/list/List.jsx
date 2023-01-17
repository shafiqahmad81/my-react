import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import Flower from "../../assets/images/flower-4.jpg";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";


const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="newContent">
        <Navbar/>
        <div className="top">
          <h1 className="title">Add New User</h1>

              <h1 className="add-new-btn">Add New </h1>
        
        </div>
        <div className="buttom">
          <div className="left">
            <img src={Flower} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'>Image:<FolderCopyIcon className='icon'/> </label>
                <input type="file" id='file' style={{ display:"none" }} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john-doe" />
              </div>
              <div className="formInput">
                <label>Name And Username</label>
                <input type="text" placeholder="John Don" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="johndoe@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+8801710931039" />
              </div>
              <div className="formInput">
                <label>Pass</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Jamalpur,shahbazpur,Atabari" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Bangladesh" />
              </div>
            <button>sent</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List