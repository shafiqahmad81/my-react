import { default as Chart } from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss";


const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContant">
        <Navbar/>
        <div className="widgets">
          <Widget/>
          <Widget/>
          <Widget/>
          <Widget/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home