import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import '../App.css';


import { AiFillLinkedin, AiFillGithub, AiOutlineMail} from "react-icons/ai";

const Contact = () => {
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Spartan',
            'sans-serif',
          ].join(','),
        },});
    return (
        <ThemeProvider theme={theme}>
             <div className="headerBackground">
                 <div className="bg-textC">
                      <div className="NameText">
                         <Typography style={{fontSize: '350%', marginTop: 5, marginLeft: -30, textAlign: 'left'}}>Casey Overton</Typography>
                         <Typography style={{fontSize: '150%',  marginLeft: -20, textAlign: 'left'}}>Full Stack/Front End Developer</Typography>
                      </div>
                  </div>
             </div>
             <div className="contactContainer">
             <div className="contact1">
               <Typography style={{color: 'white', textAlign: 'center', fontSize: '120%'}}><AiOutlineMail  style={{padding: 3}}/>Email: Overtonc1@gmail.com </Typography>
             </div>
             <div className="contact2">
               <Typography style={{color: 'white', textAlign: 'center', fontSize: '120%'}}>
               <a style={{color:'white', marginBottom: 100,}} href="https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton"><AiFillGithub style={{padding: 3}}/>Github</a>
               </Typography>
             </div>
             <div className="contact3">
             <Typography style={{color: 'white', textAlign: 'center', fontSize: '120%'}}>
               <a style={{color:'white', marginBottom: 100, }} href="https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton"><AiFillLinkedin style={{padding: 3}}/>Linkedin </a>
               </Typography>
             </div>
             </div>
         </ThemeProvider>
    
    );
}
 
export default Contact;