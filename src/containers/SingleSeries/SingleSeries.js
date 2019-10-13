import React, { Component } from 'react';

export class SingleSeries extends Component {
  render() {
    return (
      <div>
        <p>Single Series - the show ID will be {this.props.match.params.id}</p>
      </div>
    )
  }
}

export default SingleSeries;
