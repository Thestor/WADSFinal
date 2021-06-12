import React, { Component, useState } from "react";
 



const NewURL = ({label, id, name, placeholder, error, onChange}) => {
    const [value,setValue] = useState('');
    const [urls,setURLS] = useState('');
    const [isActive, setIsActive] = useState(false);


    const changeHandler = (e) => {
        setValue(e.target.value);
        onChange(name,urls);
    }



    return (
        <>
            <div className="tags-input">
            <label>{label}</label>
            </div>
            <div className="tags-input__wrapper">
                <input 
                        type="text"
                        placeholder={placeholder}
                        name={name}
                        id={id}
                        value={value}
                        onChange={changeHandler}
                    />
            </div>
            {error && <div className="error">{error}</div>}
        </>
    )
}

export default NewURL;
