import React, { Component, useState } from "react";
import NewTag from './NewTag';
import NewURL from './NewURL';
import './Home.css';

 
export default function Home() {

    const [tags, setTags] = useState([]);
    const [urls, setURLS] = useState([]);
    const [errors, setErrors] = useState({});

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

        else if(name === 'urls') {
            setURLS(value);
            if(value.length > 0 && errors.urls) {
                setErrors(prev => {
                const prevErrors = {...prev};
                delete prevErrors.urls;
                return prevErrors;
                });
            }
        }
    }

  const submitHandler = e => {
    e.preventDefault();

    if(tags.length === 0) {
      setErrors(prev => ({
        ...prev,
        tags: 'Please add at least one tag'
      }));
    }

    if(urls.length === 0) {
        setErrors(prev => ({
          ...prev,
          urls: 'Please enter a URL'
        }));
      }

    if(tags.length > 0) {
      console.log(tags, urls);
      // Submit form
    }
  }

  return (
    <>
        <div>
            <form onSubmit={submitHandler}>

                <NewURL
                label="URL"
                id="urls"
                name="urls"
                placeholder="Enter URL.."
                onChange={changeHandler}
                error={errors.urls}
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
                
                <button type="submit">Submit</button>
            </form>
        </div>
    </>

    );
    
}