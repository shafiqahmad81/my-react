import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import "./widget.scss";


const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">USER</span>
            <span className="counter">21213</span>
            <span className="link">see all user</span>
        </div>
        <div className="right">
            <div className="percentages positive">
                <ExpandLessIcon/>
                20%
            </div>
            <PersonOutlineOutlinedIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widget