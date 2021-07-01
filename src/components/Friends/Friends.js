import React from 'react';
import  './Friends.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faDollarSign,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Friends = (props) => {
    const {name, email, image, salary, phone} = props.friend;
    const handleFriendList = props.handleFriendList;
    // console.log(props);
    
    return (
        <div className="friend-card">
            <img src={image} alt="" />
            <h3 className="friend-title">{name}</h3>
            <p><FontAwesomeIcon icon={faEnvelope}/> {email}</p>
            <p><FontAwesomeIcon icon={faPhoneAlt}/> {phone}</p>
            <p><FontAwesomeIcon icon={faDollarSign}/> {salary}</p>
            <button title ="Click to Add" className="main-btn" onClick={() => handleFriendList(props.friend)}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
};

export default Friends;