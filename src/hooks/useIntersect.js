import { createRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useIntersect = (callback, setPage, page) => {
  const observerElement = createRef()
  const dispatch = useDispatch()
  const handleObserver = (entities) => {
    if (entities[0].isIntersecting) {
      dispatch(setPage())
      callback()
    }
  }
   
  console.log(page);

  useEffect(() => {  
    console.log('effect');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }
  
    const observer = new IntersectionObserver(handleObserver, options)
  
    observer.observe(observerElement.current)
  }, [])

  return {
    observerElement,
  }
}
