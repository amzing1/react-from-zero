import { useState } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

function toCelsius(f: number) {
  return ((f - 32) * 5) / 9
}
function toFahrenheit(c: number) {
  return (c * 9) / 5 + 32
}
function tryConvert(
  temperature: string,
  convert: (n: number) => number,
): string {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) return ''
  const output = convert(input)
  return String(Math.round(output * 1000) / 1000)
}

const Calculator = () => {
  const [scale, setScale] = useState<'f' | 'c'>('f')
  const [temperature, setTemperature] = useState('')

  const celsius =
    scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit =
    scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

  const handleCelsiusChange = (value: string) => {
    setScale('c')
    setTemperature(value)
  }
  const handleFahrenheitChange = (value: string) => {
    setScale('f')
    setTemperature(value)
  }

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}

export default Calculator
