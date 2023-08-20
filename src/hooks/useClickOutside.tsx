import { RefObject, useEffect } from 'react'

/**
 * Custom hook to handle click events outside of a specified element.
 *
 * @param {RefObject<HTMLElement>} ref - Reference to the element to listen for click events outside of.
 * @param {() => void} onClickOutside - Callback function to be invoked when a click event occurs outside of the specified element.
 * @return {void}
 */

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        onClickOutside()
      }
    }
    // Bind
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // dispose
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onClickOutside])
}
