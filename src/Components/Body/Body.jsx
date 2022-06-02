import React from "react";
import "./body.scss";
import BG from "../../Assets/bg.jpg";
import { Avatar, Button, Chip, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import TimelinePlot from "../Timeline/Timeline";
import AreaCard from "../Card/Card";
import {
  CustomerChart,
  DonutChart,
  MonthlyEarningChart,
  RevenueChart,
  SalesOverviewChart,
  WeeklyStatsChart,
} from "../Charts/Charts";
import {
  ChatBubbleOutlineOutlined,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import BasicTable from "../Table/Table";

function Body() {
  return (
    <div className="body">
      <div className="gridBody">
        <div className="grid-item item-1">
          <div className="left">
            <h4>Congratulations Sandy</h4>
            <div className="info">
              <h2>$39,356</h2>
              <div className="growth">
                <ArrowUpwardIcon />
                <h6>+9%</h6>
              </div>
            </div>
            <Button variant="contained">Download</Button>
          </div>
          <div className="right">
            <img className="Img" src={BG} alt="" />
          </div>
        </div>
        <div className="temp item-2 grid-item">
          <div className="left">
            <h4>Purchases</h4>
            <div className="info">
              <h2>2,317</h2>
              <h5>Monthly Sales</h5>
            </div>
          </div>
          <div className="right">
            <IconButton>
              <ShoppingBagIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
        <div className="temp item-3 grid-item">
          <div className="left">
            <h4>Total Earning</h4>
            <div className="info">
              <h2>$93,438.78</h2>
              <h5>Monthly Revenue</h5>
            </div>
          </div>
          <div className="right">
            <IconButton>
              <AttachMoneyIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
        <div className="grid-item item-4">
          <div className="header">
            <h2>Revenue Updates</h2>
            <select classname="select">
              <option>March 2022</option>
              <option>April 2022</option>
              <option>May 2022</option>
            </select>
          </div>
          <div className="chart">
            <RevenueChart />
          </div>
        </div>
        <div className="item-5">
          <div className="item-6">
            <div className="body">
              <h2>Monthly Earning</h2>
              <div className="chart">
                <MonthlyEarningChart />
              </div>
              <div className="info">
                <h2>$39,356</h2>
                <div className="growth">
                  <ArrowUpwardIcon />
                  <h6>+9% this week</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item-7">
            <div className="body">
              <h2>Monthly Earning</h2>
              <div className="chart">
                <CustomerChart />
              </div>
              <div className="info">
                <h2>750</h2>
                <div className="growth">
                  <ArrowUpwardIcon />
                  <h6>+9% this week</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item item-8">
          <div className="header">
            <h2>Total Sales</h2>
            <select classname="select">
              <option>March 2022</option>
              <option>April 2022</option>
              <option>May 2022</option>
            </select>
          </div>

          <hr style={{ width: "90%", margin: "auto", marginTop: "-10px" }} />
          <div className="header" style={{ marginTop: "-10px" }}>
            <h2>Sales Yearly</h2>
            <h2>8,364,398</h2>
          </div>
          <div className="donut">
            <DonutChart />
          </div>
        </div>
        <div className="grid-item item-9">
          <div className="header">
            <h2>Product Performance</h2>
            <select classname="select">
              <option>March 2022</option>
              <option>April 2022</option>
              <option>May 2022</option>
            </select>
          </div>
          <BasicTable />
        </div>
        <div className="grid-item item-10">
          <TimelinePlot />
        </div>
        <div className="grid-item item-11">
          <div className="header" style={{ position: "absolute", top: 0 }}>
            <h2>Sales Overview</h2>
          </div>
          <div className="chart">
            <SalesOverviewChart />
          </div>
        </div>
        <div className="grid-item item-12">
          <AreaCard />
        </div>
        <div className="grid-item item-13">
          <div className="header">
            <h2>Weekly Stats</h2>
            <IconButton>
              <MoreHorizOutlinedIcon />
            </IconButton>
          </div>
          <div className="content">
            <div className="listItem">
              <div className="left">
                <div className="icon" style={{ backgroundColor: "#03c9d7" }}>
                  <ShoppingBasketOutlined />
                </div>
                <div className="info">
                  <h2>Top Sales</h2>
                  <p>Johnathen Deo</p>
                </div>
              </div>
              <div className="right">+68%</div>
            </div>
            <div className="listItem">
              <div className="left">
                <div className="icon" style={{ backgroundColor: "#fb9678" }}>
                  <StarBorderPurple500OutlinedIcon />
                </div>
                <div className="info">
                  <h2>Best Seller</h2>
                  <p>MaterialPro Admin</p>
                </div>
              </div>
              <div className="right">+68%</div>
            </div>
            <div className="listItem">
              <div className="left">
                <div className="icon" style={{ backgroundColor: "#00c292" }}>
                  <ChatBubbleOutlineOutlined />
                </div>
                <div className="info">
                  <h2>Most Commented</h2>
                  <p>Ample Admin</p>
                </div>
              </div>
              <div className="right">+68%</div>
            </div>
          </div>
          <div className="chart">
            <WeeklyStatsChart />
          </div>
        </div>
        <div className="grid-item item-14">
          <div className="header">
            <h2>MedicalPro Branding</h2>
            <IconButton>
              <MoreHorizOutlinedIcon />
            </IconButton>
          </div>
          <div className="Container">
            <div className="timeStamp">16 APR 2022</div>
            <div className="infoContainer">
              <div className="info">
                <p>Due Date</p>
                <h5>Oct 23,2022</h5>
              </div>
              <hr />
              <div className="info">
                <p>Budget</p>
                <h5>$98,500</h5>
              </div>
              <hr />
              <div className="info">
                <p>Expenses</p>
                <h5>$63,000S</h5>
              </div>
            </div>
            <hr />
            <div className="teams">
              <h3>Teams</h3>
              <div className="chipContainer">
                <Chip className="chip1" label="Medium" />
                <Chip className="chip2" label="Low" />
              </div>
            </div>
            <hr />
            <div className="leader">
              <h3>Leader</h3>
              <div className="container">
                <Avatar className="avatar" sx={{ width: 35, height: 35 }} />
                <Avatar className="avatar" sx={{ width: 35, height: 35 }} />
                <Avatar className="avatar" sx={{ width: 35, height: 35 }} />
                <Avatar className="avatar" sx={{ width: 35, height: 35 }} />
              </div>
            </div>
            <hr />
            <div className="foot">
              <button>Add</button>
              <p>36 Recent Transactions</p>
            </div>
          </div>
        </div>
        <div className="footer">© 2021 All rights reserved by Sandy</div>
      </div>
    </div>
  );
}

export default Body;
