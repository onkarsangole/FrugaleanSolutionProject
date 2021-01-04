import React from 'react';
import { Avatar } from '@material-ui/core';
import './Taskcard.css';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

function Grouptask({title,info,task,image,image_two}) {
    return (
        <div className="card">
            <div className="header_line"></div>
            <div className="card__title">
                <h5 className="cardname">{title}</h5>            
                   <div className="icon-avatar">                   
                        <WhatshotIcon/>
                        <RadioButtonCheckedIcon/>
                    </div>
            </div>
            <div className="card_info">
                <h4> { info }</h4>
            </div>
            <div className="bottom_info">
                <div className="icons">                 
                <Avatar src={image}/>
                <Avatar src={image_two}/>
                </div>
                <p>{task}</p>            
            </div>
      </div>
    )
}

export default Grouptask;
