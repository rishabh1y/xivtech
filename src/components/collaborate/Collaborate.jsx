import React from 'react'
import "./collaborate.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function Collaborate(props) {
  // console.log(props)

  return (
    <div>
     <div className="wrapper">
      <div className='upper'>
      </div>  
      <div className="bgImgWrapper">
        <img className="bgImg" src='./assets/bgfirst.jpg' alt=''></img>
       <div className="heading">
       <h2>Let's Collaborate</h2>
       </div>
      </div>


      <div className="collaborate">
     <div className="services">
    <div className="servicesLeft">
        
        <div className="servicesHead">
            <p>{props.title}</p>
        </div>

        <div className="servicesdesc">
      <p> {props.desc}</p> 

        </div>

        <div className="servicesLink">
          <div className="txtLink"> {props.lname} </div>
           <div className="rightArrow"><ArrowRightAltIcon/></div> 
        </div>
        
      </div>
     
      

      <div className="servicesRight">
        <div className="FirstImgWrapper">
        <img className='FirstImg' src={props.link} alt=''></img>
      </div>
        </div>
        
      </div>
      </div> 




      {/* <div className="collaborate">
     <div className="services">
    <div className="servicesLeft">
        
        <div className="servicesHead">
            <p>{props.title}</p>
        </div>

        <div className="servicesdesc">
      <p> {props.desc}</p> 

        </div>

        <div className="servicesLink">
          <div className="txtLink"> {props.lname} </div>
           <div className="rightArrow"><ArrowRightAltIcon/></div> 
        </div>
        
      </div>
     
      

      <div className="servicesRight">
        <div className="FirstImgWrapper">
        <img className='FirstImg' src={props.link} alt=''></img>
      </div>
        </div>
        
      </div>
      </div>  */}

      </div>
      
    </div>
  )
}
