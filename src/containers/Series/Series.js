import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList/SeriesList';

export class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = (e) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response) => response.json())
    .then(json => this.setState({ series: json }))
  }

  render() {
    const { series, seriesName, isFetching } = this.state;
    
    return (
      <div>
        The length of series array: {this.state.series.length}
        <div>
          <input type="text" onChange={this.onSeriesInputChange} />
        </div>
        <SeriesList list={this.state.series} />
      </div>
    )
  }
}

export default Series;
