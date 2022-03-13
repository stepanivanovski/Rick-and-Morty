import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from '../components/Spinner'
import NotFound from '../components/NotFound'
import SearchPanel from '../components/SearchPanel'
import LocationCardList from '../components/cards/LocationCardList'
import NavBar from '../components/NavBar'
import { getLocationsSelector } from '../selectors/locationsSelector'
import {
  onLoading,
  getLocationsThunk,
  setRemainingPages,
  setNextPage,
} from '../store/locationsSlice'

class LocationsPage extends Component {
  observerElement = React.createRef()

  getData() {
    const {
      filterState,
      nextPage,
      type,
      measurement,
      getLocationsThunk,
      getFilteredLocationsThunk,
    } = this.props

    if (!filterState) {
      getLocationsThunk(nextPage)
      console.log(1)
    } else {
      console.log(2)
      getFilteredLocationsThunk({ type, measurement })
    }
  }

  handleObserver = (entities) => {
    if (entities[0].isIntersecting) {
      if (this.props.remainingPages !== 0) {
        this.props.onLoading()
        this.getData()
      }
    }
  }

  componentDidMount() {
    const { locations, filterState } = this.props

    if (!locations) {
      this.getData()
    }

    if (!filterState) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }

      const observer = new IntersectionObserver(this.handleObserver, options)

      observer.observe(this.observerElement.current)
    }
  }

  render() {
    const { filterState, locations, error, loading } = this.props

    const content = error ? (
      <NotFound
        text="Упс, что-то пошло не так, проверьте подключение к интернету"
        url="not-found.png"
      />
    ) : !locations ? (
      <Spinner />
    ) : locations === null ? null : locations.length === 0 ? (
      <NotFound
        text="По данным фильтра ничего не найдено"
        url="not-found.png"
      />
    ) : (
      <LocationCardList data={locations} />
    )

    return (
      <div className="locations">
        <div className="locations__header">
          <SearchPanel
            path="./searchLoc"
            filterPath="/filterLoc"
            placeholder={'Найти локацию'}
            filter
          />
          <div className="locations__total">
            Всего локаций: {locations?.length}
          </div>
        </div>
        {content}
        {!filterState ? (
          <div
            style={!locations ? { display: 'none' } : { display: 'block' }}
            className={
              this.props.remainingPages !== 0
                ? 'characters__observer'
                : 'characters__observer_hidden'
            }
            ref={this.observerElement}
          >
            {loading ? <span>Loading...</span> : null}
          </div>
        ) : null}
        <NavBar />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: getLocationsSelector(state),
    error: state.locations.error,
    filterState: state.locations.filterState,
    loading: state.locations.loading,
    checkbox: state.locations.checkbox,
    nextPage: state.locations.nextPage,
    type: state.locations.type,
    measurement: state.locations.measurement,
    remainingPages: state.locations.remainingPages,
  }
}

const mapDispatchToProps = {
  getLocationsThunk,
  onLoading,
  setRemainingPages,
  setNextPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage)
