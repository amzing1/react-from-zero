import { useEffect, useState } from "react"

const CleanupLab = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    console.log('setup');
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return <div>window with: {width}</div>
}

export default CleanupLab