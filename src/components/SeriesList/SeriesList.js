import React from 'react';
import './SeriesList.css';

const SeriesListItem = (props) => (
  <li>
    {props.series.show.name}
  </li>
);

const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map((series) => (
          <SeriesListItem key={series.show.id} series={series} />
        ))}
      </ul>
    </div>
  )
};

export default SeriesList
