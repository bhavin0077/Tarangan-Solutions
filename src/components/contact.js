import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    position: "relative",
    bottom: "2rem",
    left: "-8rem",
    // eslint-disable-next-line no-dupe-keys
    position: "fixed",
    zIndex:"2"
  },
  typography: {
    padding: theme.spacing(2),
  },
 

}));

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={classes.root}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>

            <Paper style={{background:"none"}}>
            
            <Paper style={{borderRadius:"50px", margin:"1rem"}}>
            <Typography className={classes.typography}>
                <a href="https://api.whatsapp.com/send/?phone=918421342089&text&app_absent=0">
                <img style={{width:"50px"}} src="./images/whatsapp.gif" alt="" />
                </a>   
              </Typography>
            </Paper>
       
             <Paper style={{borderRadius:"50px", margin:"1rem"}}>
              <Typography className={classes.typography}>
               <a href="https://www.instagram.com/tarangansolution/">
               <img style={{width:"50px"}} src="./images/instagram.gif" alt="" />
               </a>               
              </Typography>
              </Paper>
             
             <Paper style={{borderRadius:"50px", margin:"1rem"}}>
             <Typography className={classes.typography}>
               <a href="https://www.linkedin.com/in/tarangansolutions/">
               <img style={{width:"50px"}}  src="./images/linkedin.gif" alt="" />
               </a>               
              </Typography>
             </Paper>
              
              <Paper style={{borderRadius:"50px", margin:"1rem"}}>
              <Typography className={classes.typography}>
               <a href="/contact">
               <img style={{width:"50px"}}  src="./images/twitter.gif" alt="" />
               </a>
              </Typography>
             </Paper>

             <Paper style={{borderRadius:"50px", margin:"1rem"}}>
              <Typography className={classes.typography}>
               <a href="https://www.facebook.com/tarangansolutions/">
               <img style={{width:"50px"}}  src="./images/facebook.gif" alt="" />
               </a>
              </Typography>
             </Paper>
             
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="outlined" onClick={handleClick('top')}>
            <img src="./images/contact.png" alt="Contact Us" />
             Contact Us
          </Button>
        </Grid>
    
     
      </Grid>
     
    </div>
  );
}
