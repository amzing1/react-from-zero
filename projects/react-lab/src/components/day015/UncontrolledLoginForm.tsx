const UncontrolledLoginForm = () => {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" defaultValue="" />
      <input name="password" type="password" defaultValue="" />
      <label>
        <input name="remember" type="checkbox" defaultChecked />
        记住我
      </label>
      <button type="submit">login</button>
    </form>
  )
}

export default UncontrolledLoginForm
