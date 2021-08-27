import React,{ Component } from "react";
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import ShareIcon from '@material-ui/icons/Share';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const Confirmation=({prevStep, nextStep, values})=>
{
    console.log(values);
    const { firstName, lastName, email, contact, city, pin } = values
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    
    return(
        <div className="s1">
                <div className="s2">
                    <div className="s21">
                        <Typography variant="p" style={{color:"#dd0b0b"}}>Why The Meat Empire?</Typography>
                    </div>
                    <div className="s22">
                        <div style={{marginLeft:"-6.5em"}}><CallIcon fontSize="small"/></div>
                        <div style={{marginTop:"-1.5em",marginLeft:"-0.2em"}}>
                            <Typography style={{fontSize:"smaller"}}>1800-****-****</Typography>
                        </div>
                    </div>
                    <div className="s23">
                        <div style={{marginLeft:"-6.5em"}}><CallIcon fontSize="small"/></div>
                        <div style={{marginTop:"-1.5em",marginLeft:"-0.2em"}}>
                            <Typography style={{fontSize:"smaller"}}>1800-****-****</Typography>
                        </div>
                    </div>
                    <div className="s24">
                        <div style={{marginLeft:"-12em"}}><MailIcon fontSize="small"/></div>
                        <div style={{marginTop:"-1.6em",marginLeft:"0.2em"}}>
                            <Typography style={{fontSize:"smaller"}}>customercare@themeatempire</Typography>
                        </div>
                    </div>
                    <div className="s25">
                        <Button style={{fontSize:"x-small"}}>My account/Login</Button>
                    </div>
                    <div className="s26">
                        <ShareIcon fontSize="small" style={{marginLeft:"-2em"}}/>
                        <WhatsAppIcon fontSize="small" style={{marginLeft:"1em"}}/>
                        <InstagramIcon fontSize="small" style={{marginLeft:"1em"}}/>                    
                    </div>
                
                </div>

                <div className="s3">
                    <div className="s31">
                    </div>
                    <div className="s32">
                        <AppBar position="static" style={{backgroundColor:"rgb(244 244 244)",height:"2rem",width:"30rem"}}>
                            <SearchIcon style={{color:"black",padding:"0.2rem",marginLeft:"18em"}} />
                            <Typography variant="p" style={{marginTop:"-1.6rem",marginLeft:"-16rem",color:"gray",fontSize:"small"}} >Search for any Delicious Product</Typography>
                        </AppBar>
                    </div>
                    <div className="s33">
                        <FavoriteBorderOutlinedIcon fontSize="small" style={{color:"gray"}}/>
                        <ShoppingCartOutlinedIcon fontSize="small" style={{marginLeft:"2em",color:"gray"}}/>
                    </div>
                </div>

                <div className="s4">
                </div>

                <div className="s5" style={{backgroundColor:"silver",paddingTop:"3em"}}>
                    <Container  component="main" maxWidth="xs">
                    <div>
                        <List>
                        <ListItem>
                            <ListItemText primary="Email" secondary={email}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="First Name" secondary={firstName}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Last Name" secondary={lastName}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Contact" secondary={contact}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="City" secondary={city}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Pin" secondary={pin}/>
                        </ListItem>
                        </List>

                        <br />
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button 
                            onClick={ Previous }
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            >
                            Previous
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                            onClick={ Continue }
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            >
                            Confirm & Continue
                            </Button>
                        </Grid>
                        </Grid>
                    </div>
                    </Container>
                </div>
            </div>    
    )
}

export default Confirmation