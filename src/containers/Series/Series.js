import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList/SeriesList';

export class Series extends Component {
  state = {
    series: []
  };
  
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    .then((response) => response.json())
    .then(json => this.setState({ series: json }))
  }

  render() {
    return (
      <div>
        The length of series array: {this.state.series.length}
        <SeriesList />
      </div>
    )
  }
}

export default Series;
