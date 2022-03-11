import { useHistory } from 'react-router'
import LocationCard from './LocationCard'

const LocationCardList = ({ data }) => {
  const history = useHistory()

  return (
    <ul className="locations__list">
      {data.map((item) => {
        return (
          <LocationCard
            onItemSelected={(id) => history.push(`/locations/${id}`)}
            key={item.id}
            {...item}
          />
        )
      })}
    </ul>
  )
}

export default LocationCardList
