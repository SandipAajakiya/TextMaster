import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className="container d-flex justify-content-center text-center mt-5 fixed-top">
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg} 
        </div>
        </div>
    )
}

export default Alert


