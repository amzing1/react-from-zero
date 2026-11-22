interface Props {
  searchKey: string
  onChangeSearchKey: (value: string) => void
}
const SearchBar = ({ searchKey, onChangeSearchKey }: Props) => {
  return (
    <div>
      <label htmlFor="search">搜索</label>
      <input
        id="search"
        placeholder="搜索内容或标题"
        value={searchKey}
        onChange={(e) => onChangeSearchKey(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
