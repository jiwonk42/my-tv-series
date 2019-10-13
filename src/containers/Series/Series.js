import React, { Component } from 'react';
import Intro from '../../components/Intro/Intro';
import SeriesList from '../../components/SeriesList/SeriesList';
import Loader from '../../components/Loader/Loader';

export class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = (e) => {
    this.setState({ seriesName: e.target.value.trim(), isFetching: true });

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response) => response.json())
    .then(json => this.setState({ series: json, isFetching: false }))
  }

  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <div>
        <Intro message="Here you can find all of your loved series" />
        <div>
          <input type="text" onChange={this.onSeriesInputChange} />
        </div>
        { 
          !isFetching && series.length === 0 && seriesName === ''
          &&
          <p>Please enter series name into the input</p>
        }
        {
          !isFetching && series.length === 0 && seriesName !== ''
          &&
          <p>No TV series have been found with this name</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList list={this.state.series} />
        }
      </div>
    )
  }
}

export default Series;
