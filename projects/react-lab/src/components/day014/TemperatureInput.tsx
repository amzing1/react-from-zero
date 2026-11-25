interface Props {
  scale: 'c' | 'f'
  temperature: string
  onTemperatureChange: (value: string) => void
}

const TemperatureInput = ({
  scale,
  temperature,
  onTemperatureChange,
}: Props) => {
  return (
    <div>
      <label>{scale === 'c' ? '摄氏' : '华氏'}</label>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  )
}

export default TemperatureInput
