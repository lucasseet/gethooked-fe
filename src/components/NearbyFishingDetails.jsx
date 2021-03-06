import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageGallery from "./ImageGallery";
import { Grid, Typography } from "@material-ui/core";
import FishRatings from "./FishRatings";
import FishSpecCard from "./FishSpecCard";
import { Box } from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 70,
    display: "flex",
    flexDirection: "row",
  },

  container: {
    margin: "0, auto",
    display: "flex",
    flexDirection: "row",
  },

  innercontainer6: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
}));

export default function NearbyFishingDetails(props) {
  const classes = useStyles();
  const { state } = useLocation();
  console.log("state", state);

  // use useState hooks
  const [cookies] = useCookies(["auth_token"]);
  const [idFishingSpotData, setIdFishingSpotData] = React.useState([]);
  const [allPost, setAllPost] = React.useState([]);

  let URL1 = "http://localhost:4000/fishing-spots/" + state;
  let URL2 = "http://localhost:4000/fishing-spots";

  const fetchURL = (url) => axios.get(url);

  const promiseArray = [URL1, URL2].map(fetchURL);

  React.useEffect(() => {
    Promise.all(promiseArray)
      .then((data) => {
        console.log(data);
        setIdFishingSpotData(data[0].data);

        const postList = data[1].data;

        const result = postList.filter(function (post) {
          return post.id === state;
        });

        setAllPost(result[0].posts);
      })
      .catch((err) => {});
  }, [state]);


  let fishCountArray = idFishingSpotData.fishCount;


  return (
    <section className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.innercontainer6}>
          <Box pt={16} pl={12} pr={10} pb={4}>
            <div>
              <Typography
                variant="h6"
                component="h2"
                style={{ fontWeight: "600", marginBottom: "10px" }}
              >
                {" "}
                Fishing In
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                style={{ fontWeight: "600", marginBottom: "20px" }}
              >
                {" "}
                {/* {props.state.fishingspotid} */}
                {idFishingSpotData.location}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontWeight: "400",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                {idFishingSpotData.description}
                Please use your best judgement when determining where you can
                fish, and make sure you follow local
                <a href="https://www.pub.gov.sg/getinvolved/activities/fishing">
                  <span
                    style={{
                      textDecoration: "underline",
                      color: "#F13A5D",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    rules and regulations
                  </span>
                </a>
                .
              </Typography>
              <FishRatings fishCountArray={fishCountArray} />

              {/* Weather */}
              <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                <FishSpecCard
                  subtitle={"Weather"}
                  title={"26 Degree"}
                  tagline={"Feels like 26 Degree"}
                />
                <FishSpecCard
                  subtitle={"Wind"}
                  title={"1.5 speed"}
                  tagline={"Wind gust 2/3s"}
                />
                <FishSpecCard
                  subtitle={"Top Bait"}
                  title={"Mud Worms"}
                  tagline={"Live Bait"}
                />
                <FishSpecCard
                  subtitle={"Rain"}
                  title={"2/3hr"}
                  tagline={"Heavy downpour"}
                />
                <FishSpecCard
                  subtitle={"Peak Bite Time"}
                  title={"7-8pm"}
                  tagline={"Try at 9pm"}
                />
                <FishSpecCard
                  subtitle={"Waves"}
                  title={"1700 km/h "}
                  tagline={"Extremely high"}
                />
              </div>
            </div>
          </Box>
        </Grid>

        <Grid item xs={6} className={classes.innercontainer6}>
          <Box pt={17} pr={12} pl={6} pb={4}>
            <ImageGallery post={allPost} />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
