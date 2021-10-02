import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodeCardList = ({ episodes, withArrow }) => {
  return (
    <ul className="episodes__list">
     {episodes.map(item => <EpisodeCard key={item.id} {...item} withArrow={withArrow}/>)}
    </ul>
  );
};

export default EpisodeCardList;