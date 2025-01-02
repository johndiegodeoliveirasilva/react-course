import { useEffect } from "react"

export const Card = () => {

  useEffect(() => {
    const handleWindowClick = () => {
      console.log('window clicked')
    }
    window.addEventListener('click', handleWindowClick)

    return () => removeEventListener('click', handleWindowClick)
  }, [])
  return (
    <div>
  Card est[a visivel]
    </div>
  )
}