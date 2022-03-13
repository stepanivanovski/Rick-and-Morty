// import { useState, useEffect, createRef } from 'react'
import { Component, createRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import Spinner from '../components/Spinner'
import NotFound from '../components/NotFound'
import SearchPanel from '../components/SearchPanel'
import CharacterCardList from '../components/cards/CharacterCardList'
import { IconListView, IconTableView } from '../icons/'
import NavBar from '../components/NavBar'
import { getCharactersSelector } from '../selectors/charactersSelector'
// import { useIntersect } from '../hooks/useIntersect'
import { getCharactersThunk, setPage } from '../store/charactersSlice'

class CharactersPage extends Component {
  state = {
    view: 'table',
  }
  observerElement = createRef()

  getData = () => {
    const { page, filter, getCharactersThunk, setPage } = this.props
    getCharactersThunk({ page, filter })
    setPage()
  }

  handleObserver = (entities) => {
    if (entities[0].isIntersecting) {
      this.getData()
    }
  }

  changeContentView = () => {
    this.setState(({ view }) => {
      return {
        view: view === 'list' ? 'table' : 'list',
      }
    })
  }

  componentDidMount() {
    if (!this.props.characters) {
      this.getData()
    }
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(this.handleObserver, options)

    observer.observe(this.observerElement.current)
  }

  render() {
    const { characters, totalPages, page, loading, error } = this.props

    const showViewIcon = () => {
      return this.state.view === 'list' ? <IconListView /> : <IconTableView />
    }

    const content = error ? (
      <NotFound text="Упс, что-то пошло не так" url="not-found.png" />
    ) : !characters ? (
      <Spinner />
    ) : characters.length === 0 ? (
      <NotFound
        text="По данным фильтра ничего не найдено"
        url="not-found.png"
      />
    ) : (
      <CharacterCardList columnView={this.state.view} data={characters} />
    )

    return (
      <div className="characters container">
        <div className="characters__header">
          <SearchPanel
            path="./searchChar"
            filter
            filterPath="/filterChar"
            placeholder="Найти персонажа"
          />
          <div className="characters__wrapper">
            <div className="characters__total">
              Всего персонажей: {characters?.length}
            </div>
            <button
              className="characters__view-switch"
              onClick={this.changeContentView}
            >
              {showViewIcon()}
            </button>
          </div>
        </div>
        {content}
        <div
          style={
            !characters || totalPages <= page
              ? { display: 'none' }
              : { display: 'block' }
          }
          className={'characters__observer'}
          ref={this.observerElement}
        >
          {loading ? <span>Loading...</span> : null}
        </div>
        <NavBar />
      </div>
    )
  }
}

// const CharactersPage = () => {
//   const [view, setView] = useState('list')
//   const dispatch = useDispatch()

//   const { error, loading, page, totalPages, filter } = useSelector(
//     (state) => state.characters
//   )
//   const characters = useSelector(getCharactersSelector)

//   const getData = () => {
//     dispatch(getCharactersThunk({ page, filter }))
//   }

//   const { observerElement } = useIntersect(getData, setPage, page)

//   const changeContentView = () => {
//     if (view === 'list') {
//       setView('table')
//     } else {
//       setView('list')
//     }
//   }
//   useEffect(() => {
//     getData({page, filter})
//   }, [])

//   const showViewIcon = () => {
//     return view === 'list' ? <IconListView /> : <IconTableView />
//   }

//   const content = error ? (
//     <NotFound text="Упс, что-то пошло не так" url="not-found.png" />
//   ) : !characters ? (
//     <Spinner />
//   ) : characters.length === 0 ? (
//     <NotFound text="По данным фильтра ничего не найдено" url="not-found.png" />
//   ) : (
//     <CharacterCardList columnView={view} data={characters} />
//   )

//   return (
//     <div className="characters container">
//       <div className="characters__header">
//         <SearchPanel
//           path="./searchChar"
//           filter
//           filterPath="/filterChar"
//           placeholder="Найти персонажа"
//         />
//         <div className="characters__wrapper">
//           <div className="characters__total">
//             Всего персонажей: {characters?.length}
//           </div>
//           <button
//             className="characters__view-switch"
//             onClick={changeContentView}
//           >
//             {showViewIcon()}
//           </button>
//         </div>
//       </div>
//       {content}
//       <div
//         style={
//           !characters || totalPages === page
//             ? { display: 'none' }
//             : { display: 'block' }
//         }
//         className={'characters__observer'}
//         ref={observerElement}
//       >
//         {loading ? <span>Loading...</span> : null}
//       </div>
//       <NavBar />
//     </div>
//   )
// }

const mapStateToProps = (state) => {
  return {
    characters: getCharactersSelector(state),
    loading: state.characters.loading,
    error: state.characters.error,
    page: state.characters.page,
    totalPages: state.characters.totalPages,
    filter: state.characters.filter,
  }
}

const mapDispatchToProps = {
  getCharactersThunk,
  setPage
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage)
