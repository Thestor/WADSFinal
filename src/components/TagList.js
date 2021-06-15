import React, { Component } from 'react';
import { TagCard } from './TagCard';
import TagPop from './TagPop';

export class TagList extends Component {

  constructor() {
    super();
    this.state = {
      tags: [1, 2, 3] //DATA FOR TAGS USE GET HERE
    }
  }

  renderTags() {
    return this.state.tags.map((tag, i) => (
      <TagCard key={i} />
    ));
  }

  addTags() {
    const tags = this.state.tags;
    tags.push(1);
    this.setState({
      tags
    });
  }

  deleteTags(i) {
    const tags = this.state.tags;
    
    const index = tags.indexOf(i);
    if(index >-1){
      tags.splice(index,1)
    }

    this.setState({
      tags
    });
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-md-3">
            <h2 className='page-title'>TAGS</h2>
          </div>
          <div className="col-md-6">
            <button onClick={this.addTags()} className="btn btn-dark">Add Tags</button>
          </div>
        </div>
        <div className='row'>
          {this.renderTags()}
        </div>
      </section>
    )
  }
}