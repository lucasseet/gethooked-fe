import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Buttons from './Button';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom:70
    },

container:{
    maxWidth:1900,
    backgroundColor: "white",
},

community:{
    display:'flex',
    alignItems:'center',
    textAlign: 'left',
    padding:'150px'

}


}));

export default function HomeJoinCommunity() {
    const classes = useStyles();
    

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
            <Grid item xs={6}>
            <img
          src="https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405345/community2_ehnkcp.png"
          height='800'
          
        />

            </Grid>

            <Grid item xs={6} className={classes.community}>
                <div>
                <Typography variant="h4" component="h2" style={{fontWeight:'600', marginBottom: '20px'}}> Join Our Community</Typography>
                <Typography variant="body1"  style={{fontWeight:'400', lineHeight:'1.6', marginBottom: '20px'}}> 
                With over 13 million anglers from all over the world, no other fishing app contains as much detailed catch data as GetHooked. You can find catches, make connections and learn different fishing techniques everywhere from your local pond to the middle of the farthest ocean.
                </Typography>
                
                <div style={{display:'flex', justifyContent:'flex-start'}}>
                <Link
            to="/community"
            style={{ textDecoration: "none", color: "#28362C", display:"flex" }}
          >
                <Buttons color="secondary" variant="contained"children="Join The Community"/></Link>

                <Link
            to="/community/create"
            style={{ textDecoration: "none", color: "#28362C", display:"flex" }}
          >
                <Buttons color="secondary" variant="outlined" children="What's On Your Mind?"/></Link>
                </div>

                </div>

            </Grid>

        </Grid>

      </Container>
    </section>
  );
}

