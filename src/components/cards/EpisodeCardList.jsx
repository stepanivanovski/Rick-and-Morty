import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodeCardList = () => {
  return (
    <ul className="episodes__list">
     <EpisodeCard/>
     <EpisodeCard/>
     <EpisodeCard/>
     <EpisodeCard/>
     <EpisodeCard/>
    </ul>
  );
};

export default EpisodeCardList;