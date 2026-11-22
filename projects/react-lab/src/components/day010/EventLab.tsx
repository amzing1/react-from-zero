const EventLab = () => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('[bubble] target currentTarget', e.target, e.currentTarget)
  }
  const hanleClickCapture = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    console.log('[capture] target currentTarget', e.target, e.currentTarget)
  }
  return (
    <div onClickCapture={hanleClickCapture} onClick={(e) => handleClick(e)}>
      <div onClickCapture={hanleClickCapture} onClick={(e) => handleClick(e)}>
        <div onClickCapture={hanleClickCapture} onClick={(e) => handleClick(e)}>
          click
          <button onClick={(e) => e.stopPropagation()}>stopPropagation</button>
          <a href="#x" onClick={(e) => e.preventDefault()}>
            link
          </a>
        </div>
      </div>
    </div>
  )
}

export default EventLab
