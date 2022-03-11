import { useHistory } from 'react-router'
import { IconArrow } from '../icons'

const GoBackButton = ({ text, className }) => {
  const history = useHistory()

  const content = text ? <h2 className="goBack__title">{text}</h2> : null

  return (
    <div className="goBack">
      <button
        onClick={() => {
          history.goBack()
        }}
      >
        <IconArrow className={className} />
      </button>
      {content}
    </div>
  )
}

export default GoBackButton
