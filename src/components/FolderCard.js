import React, {useState} from 'react'
import FolderPop from './FolderPop';

export function FolderCard() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    }


  return (
    
    <span onClick={togglePopUp}>
    <div className="col-md-3 col-xs-6 btn" onClick={togglePopUp} style={{margin:'10px'}}>
      <div className="card">
        <img className="card-img-top" src="http://via.placeholder.com/350x250" alt=""></img>
        <div className="card-body">
          <h3 className="card-text" style={{textAlign:'center'}}>
            Folder 1 
          </h3>
        </div>
      </div>
    </div>
    {isOpen && <FolderPop
    content={<>
    <b>Folder Details:</b>
    <div>
    <p>- www.google.com</p>
    <p>- www.facebook.com</p>
    <p>- www.gmail.com</p>
    </div>
    </>}
    handleClose={togglePopUp}
    />}
    </span>
    
  );
}
