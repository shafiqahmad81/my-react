import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Totle Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={"5"}/>
            </div>
            <p className="title">total salse made tody</p>
            <p className="amount">$420</p>
            <p className="des">Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit.</p>

            <div className="summery">
              <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negetive">
                  <ExpandMoreIcon fontSize='small'/>
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Last week</div>
                <div className="itemResult positive">
                  <ExpandLessIcon fontSize='small'/>
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Last month</div>
                <div className="itemResult positive">
                  <ExpandLessIcon fontSize='small'/>
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Featured