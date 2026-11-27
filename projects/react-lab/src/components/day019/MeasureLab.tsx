import { useRef, useState } from 'react'

const MeasureLab = () => {
  const boxRef = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState<[number, number]>([0, 0])

  const handleMeasure = () => {
    if (!boxRef.current) {
      return
    }
    const rect = boxRef.current.getBoundingClientRect()
    setSize([rect.width, rect.height])
  }
  return (
    <div>
      <p>
        size: {size[0]}, {size[1]}
      </p>
      <button onClick={() => boxRef.current?.scrollIntoView()}>
        scrollToBox
      </button>
      <button onClick={handleMeasure}>measure</button>
      <div
        ref={boxRef}
        style={{
          width: 300,
          height: 300,
          background: 'red',
          marginTop: 2000,
        }}
      >
        box
      </div>
    </div>
  )
}

export default MeasureLab
