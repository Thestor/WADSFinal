import React, { Component, useState } from "react";
import NewTag from './NewTag';
import NewURL from './NewURL';
import './Home.css';

 
export default function Home() {

    const [tags, setTags] = useState([]);
    const [url, setURL] = useState('');
    const [errors, setErrors] = useState({});
    const [error,setError] = useState('');

    const changeHandler = (name, value) => {
        if(name === 'tags') {
        setTags(value);
        if(value.length > 0 && errors.tags) {
            setErrors(prev => {
            const prevErrors = {...prev};
            delete prevErrors.tags;
            return prevErrors;
            });
        }
        }

    }

    const urlChange = (name,value) => {
      setURL(value);
    }

  

    const submitHandler = e => {
      e.preventDefault();

      if(tags.length === 0) {
        setErrors(prev => ({
          ...prev,
          tags: 'Please add at least one tag'
        }));
      }


      if(tags.length > 0) {
        // Submit form
        console.log(url,tags);
        alert("Successfully Added New Bookmark: \n\nURL: " + String(url) + "\n" + "Tags: " + String(tags));
        window.location.reload();

      }
    }



  return (
    <>
        <div>
            <form onSubmit={submitHandler}>

                <NewURL
                label="URL"
                name="url"
                id="url"
                placeholder="Enter URL.."
                onChange={urlChange}
                error={error.url}
                />   

                <br></br>

                <NewTag 
                label="Tags"
                id="tags"
                name="tags"
                placeholder="Add tag"
                onChange={changeHandler}
                error={errors.tags}
                defaultTags={tags}
                />

                <br></br>
                <div className="submitButton">
                  <button type="submit ">Submit</button>
                </div>

            </form>
        </div>
    </>

    );
    
}