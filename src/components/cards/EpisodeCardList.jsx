import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodeCardList = ({ withArrow }) => {
  return (
    <ul className="episodes__list">
     <EpisodeCard withArrow={withArrow}/>
     <EpisodeCard withArrow={withArrow}/>
     <EpisodeCard withArrow={withArrow}/>
     <EpisodeCard withArrow={withArrow}/>
     <EpisodeCard withArrow={withArrow}/>
    </ul>
  );
};

export default EpisodeCardList;