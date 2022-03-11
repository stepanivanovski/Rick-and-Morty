import { useHistory } from 'react-router'
import EpisodeCard from './EpisodeCard'

const EpisodeCardList = ({ data, withArrow = null }) => {
  const history = useHistory()

  return (
    <ul className="episodes__list">
      {data.map((item) => {
        return (
          <EpisodeCard
            onItemSelected={(id) => history.push(`/episode/${id}`)}
            key={item.id}
            {...item}
            withArrow={withArrow}
          />
        )
      })}
    </ul>
  )
}

export default EpisodeCardList
