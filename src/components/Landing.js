import React from "react";
import { Grow, Slide } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class Landing extends React.Component {



  render() {
    return (
      <div className="Landing">
        <div className="Image">
        <Slide
            in={true}
            timeout={1000}
            direction="left"
          >
          <img 
              src={require('../assets/annielandingpage.png')}
              alt="LandingImage"
              style={{
                float: "right",
                width: "50%",
                height: "50%",
              }}
            />
        </Slide>
        </div>
        <div 
          className="Text" 
          align="left"
          style={{
            float: "left",
            marginTop: "40vh"
          }}>
          <Grow
            in={true}
            timeout={2000}
            direction="right"
          >
            <Typography 
                variant="h1"
                style={{
                  color: "rgba(0, 0, 0, 0.8)",
                  fontSize: "5vw",
                  marginLeft: 100,
                }}>
                Say hello to <span style={{
                  fontWeight: "bold",
                  //color: "rgba(102,204,255,0.7)"}}
                  }}>
                  Annie.
                  </span>
              </Typography>
          </Grow>
          <Grow
            in={true}
            timeout={3000}
            direction="right"
          >
            <Typography 
                variant="subtitle2"
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  marginLeft: 100,
                  marginTop: 15,
                  fontSize: "1vw",
                  fontWeight: "thin"
                }}>
                Delivering the best experience<br />to you, as an artist.
              </Typography>
          </Grow>
        </div>
      </div>
    );
  }
}

export default Landing;
