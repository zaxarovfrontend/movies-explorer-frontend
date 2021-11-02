import React from 'react';

import './userAlert.css';

function UserAlert({ message }) {
    if (!message) {
        return null;
    }
    return(
        <div className="userAlert">{ message }</div>
    )
}

export default UserAlert;
