import React, { Component, useState } from "react";
 



const NewURL = ({label, id, name, placeholder, error, onChange}) => {
    const [value,setValue] = useState('');
    const [url, setURL] = useState('');

    const changeHandler = (e) => {
        setValue(e.target.value);
        onChange(name,url);
    }


    const updateURLHandler = e => {

        setURL(value);
        onChange(name,value);
        
    }

    return (
        <>
            <div className="tags-input">
            <label>{label}</label>
            </div>
            <input 
                    type="text"
                    placeholder={placeholder}
                    name={name}
                    id={id}
                    value={value}
                    className="tags-input__wrapper tags-input"
                    style={{width:"100%"}}
                    onChange={changeHandler}
                    onKeyUp={updateURLHandler}
                    required
                />
            {error && <div className="error">{error}</div>}
        </>
    )
}

export default NewURL;
