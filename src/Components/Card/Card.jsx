import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, IconButton } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Chip from "@mui/material/Chip";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./card.scss";

export default function AreaCard() {
  return (
    <div className="card">
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image="https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/blog-bg2-2x.f6e9447d.jpg"
            alt="green iguana"
          />
          <CardContent className="cardContent">
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              color="text.secondary"
            >
              <div className="container">
                <AccessTimeIcon /> <h5>22, March 2022</h5>
              </div>
            </Typography>
            <Typography className="content" variant="h6" color="text.primary">
              Super awesome, React 18 is coming soon!
            </Typography>
            <div className="chipContainer">
              <Chip className="chip1" label="Medium" />
              <Chip className="chip2" label="Low" />
            </div>
            <hr />
            <div className="footer">
              <div className="left">
                <Avatar className="avatar" sx={{ width: 35, height: 35 }} />
                <Avatar className="avatar" sx={{ width: 35, height: 35 }} />
                <Avatar className="avatar" sx={{ width: 35, height: 35 }} />
              </div>
              <div className="right">
                <IconButton>
                  <ChatBubbleOutlineOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
