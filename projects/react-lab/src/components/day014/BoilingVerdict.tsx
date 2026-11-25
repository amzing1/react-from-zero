interface Props {
  celsius: number
}

const BoilingVerdict = ({ celsius }: Props) => {
  if (Number.isNaN(celsius)) return <p>无效输入</p>
  return <p>{celsius >= 100 ? '水会沸腾' : '水不会沸腾'}</p>
}

export default BoilingVerdict
