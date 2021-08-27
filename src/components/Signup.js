import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card } from "@material-ui/core";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'
import Success from './Success'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


class Signup extends Component
{
    state={
        step:1,
        firstName:'',
        firstNameError:'',
        lastName:'',
        lastNameError:'',
        email:'',
        emailError:'',
        password:'',
        passwordError:'',
        contact:'',
        contactError:'',
        city:'',
        pin:'',
    }
    prevStep=()=>{
        const{step}=this.state;
        this.setState({step:step-1});
    }
    nextStep=()=>{
        const{step}=this.state;
        this.setState({step:step+1});
    }
    handleChange=input=>e=>{
        this.setState({[input]:e.target.value});
        const error = this.validate();
    }
    validate = () => {
        let isError = false;
        const { firstNameError, lastNameError, emailError, passwordError, contactError} =this.state;
        const errors= { firstNameError, lastNameError, emailError, passwordError, contactError}

        if (this.state.firstName.length < 1) {
            isError = true;
            errors.firstNameError = "Please enter your First Name";
        }
        if (this.state.lastName.length < 1) {
            isError = true;
            errors.lastNameError = "Please enter your Last Name"
        }
        if (!this.state.email.includes('@')) {
            isError = true;
            errors.emailError = "Please enter the correct E-mail address"
        }
        if (this.state.password.length < 9) {
            isError = true;
            errors.passwordError = "Password lenght should be minium 9"
        }
        if (this.state.contact.length < 10) {
            isError = true;
            errors.contactError = "Phone Number can't be less than 10"
        }
        this.setState({
            ...this.state,
            ...errors
        });

        return isError
    }
    
    render()
    {
        const slideImages = [
            'f1.jpg',
            'f6.jpg',
            'f7.jpg'
          ];
        
        const { step } = this.state;
        const { firstName, lastName, email, password, contact, city, pin } = this.state;
        const values = { firstName, lastName, email, password, contact, city, pin }
        const { firstNameError, lastNameError, emailError, passwordError, contactError} =this.state;
        const errors= { firstNameError, lastNameError, emailError, passwordError, contactError}

        
        switch (step) {
            case 1: 
              return (
                <UserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    errors={errors}
                />
              )
            case 2: 
              return (
                <PersonalDetails 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    errors={errors}
                />
              )
            case 3: 
              return (
                <Confirmation 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    values={values}
                />
              )
            case 4:
              return (
                <Success />)
            default: 
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
                        <Button style={{fontSize:"x-small"}}
                        >My account/Login</Button>
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
                    <div>
                        <AppBar position="static" style={{backgroundColor:"rgb(244 244 244)",height:"2rem",width:"41rem"}}>
                            <SearchIcon style={{color:"black",padding:"0.2rem"}} />
                            <Typography variant="p" style={{marginTop:"-1.6rem",marginLeft:"3rem",color:"black",fontSize:"small"}} >Search for any Delicious Product</Typography>
                        </AppBar>

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

                <div className="s5">
                    <Slide easing="ease">
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                                <Card className="c1" style={{backgroundColor: "currentColor"}}>
                                    <div className="c2">
                                        <Typography variant="h4" style={{color:"#dd0b0b",fontWeight:"bold"}}>
                                            Health & Safety
                                        </Typography>
                                    </div>
                                    <div className="c3">
                                        <Typography variant="h4" style={{color:"white"}}>
                                            Chicken
                                        </Typography>
                                    </div>
                                    <div className="c4">
                                        <Typography style={{fontSize:"smaller",color:"white",textAlign:"left"}}>
                                            Cent-percent Fresh & natural. Antibiotic Free, Chemical Free, Preservative Free. Vacuum Packaged - Ensuring all standards of hygiene and cleanliness are met and products remain untouched.
                                        </Typography>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                                <Card className="c1" style={{backgroundColor: "currentColor"}}>
                                    <div className="c2">
                                        <Typography variant="h4" style={{color:"#dd0b0b",fontWeight:"bold"}}>
                                            Health & Safety
                                        </Typography>
                                    </div>
                                    <div className="c3">
                                        <Typography variant="h4" style={{color:"white"}}>
                                            Mutton
                                        </Typography>
                                    </div>
                                    <div className="c4">
                                        <Typography style={{fontSize:"smaller",color:"white",textAlign:"left"}}>
                                            Chemical Free, Preservative Free, Cent-percent Fresh & natural, Antibiotic Free. Vacuum Packaged - Ensuring all standards of hygiene and cleanliness are met and products remain untouched.
                                        </Typography>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <Card className="c1" style={{backgroundColor: "currentColor"}}>
                                    <div className="c2">
                                        <Typography variant="h4" style={{color:"#dd0b0b",fontWeight:"bold"}}>
                                            Health & Safety
                                        </Typography>
                                    </div>
                                    <div className="c3">
                                        <Typography variant="h4" style={{color:"white"}}>
                                            Sea Food
                                        </Typography>
                                    </div>
                                    <div className="c4">
                                        <Typography style={{fontSize:"smaller",color:"white",textAlign:"left"}}>
                                            Antibiotic Free, Chemical Free, Preservative Free. Cent-percent Fresh & natural. Vacuum Packaged - Ensuring all standards of hygiene and cleanliness are met and products remain untouched.
                                        </Typography>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Slide>
                </div>
                   
       		</div>
        )}
}

export default Signup;
