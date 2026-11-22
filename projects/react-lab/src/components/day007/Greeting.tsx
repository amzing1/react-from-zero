interface Props {
  name: string
  age?: number
}
const Greeting = ({ name, age }: Props) => {
  return (
    <div>
      hello, {name}
      {age !== undefined ? <>,{age}</> : ''}
    </div>
  )
}

export default Greeting
