import React, { Component } from 'react';
import { FolderCard } from './FolderCard';

export class FolderList extends Component {

  constructor() {
    super();
    this.state = {
      folders: [1, 2, 3]
    }
  }

  renderFolders() {
    return this.state.folders.map((folder, i) => (
      <FolderCard key={i} />
    ));
  }

  addFolders() {
    const folders = this.state.folders;
    folders.push(1);
    this.setState({
      folders
    });
  }

  // deleteTags(i) {
  //   const tags = this.state.tags;
    
  //   const index = tags.indexOf(i);
  //   if(index >-1){
  //     tags.splice(index,1)
  //   }

  //   this.setState({
  //     tags
  //   });
  // }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-md-3">
            <h2 className='page-title'>FOLDERS</h2>
          </div>
          <div className="col-md-6">
            <button onClick={() => { this.addFolders() }} className="btn btn-dark">Add Folder</button>
          </div>
        </div>
        <div className='row'>
          {this.renderFolders()}
        </div>
      </section>
    )
  }
}