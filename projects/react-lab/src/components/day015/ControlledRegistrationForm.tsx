import { useState } from 'react'

interface FormState {
  username: string
  email: string
  password: string
  confirm: string
  age: string
  gender: string
  country: string
  bio: string
  agree: boolean
}

interface FormErrors {
  username?: string
  email?: string
  password?: string
  confirm?: string
  age?: string
  agree?: string
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (form.username.trim().length < 3) errors.username = '至少 3 个字符'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = '邮箱格式不对'
  if (form.password.length < 6) errors.password = '至少 6 位'
  if (form.password !== form.confirm) errors.confirm = '两次密码不一致'
  const age = Number(form.age)
  if (form.age.trim() === '' || Number.isNaN(age) || age < 18 || age > 120)
    errors.age = '年龄 18–120'
  if (!form.agree) errors.agree = '必须同意'
  return errors
}

const ControlledRegistrationForm = () => {
  const [formState, setFormState] = useState<FormState>({
    username: '',
    email: '',
    password: '',
    confirm: '',
    age: '',
    gender: '',
    country: '',
    bio: '',
    agree: false,
  })
  const errors = validate(formState)
  const hasError = Object.keys(errors).length > 0
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange<T extends keyof FormState>(
    key: T,
    value: FormState[T],
  ) {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <input
        value={formState.username}
        onChange={(e) => handleChange('username', e.target.value)}
      />
      <input
        value={formState.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <input
        value={formState.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      <input
        value={formState.confirm}
        onChange={(e) => handleChange('confirm', e.target.value)}
      />
      <input
        value={formState.age}
        onChange={(e) => handleChange('age', e.target.value)}
      />
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formState.gender === 'male'}
          onChange={(e) => handleChange('gender', e.target.value)}
        />
        男
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formState.gender === 'female'}
          onChange={(e) => handleChange('gender', e.target.value)}
        />
        女
      </label>
      <select
        value={formState.country}
        onChange={(e) => handleChange('country', e.target.value)}
      >
        <option value="china">china</option>
        <option value="usa">usa</option>
      </select>
      <textarea
        value={formState.bio}
        onChange={(e) => handleChange('bio', e.target.value)}
      ></textarea>
      <input
        type="checkbox"
        checked={formState.agree}
        onChange={(e) => handleChange('agree', e.target.checked)}
      />
      <button type="submit">submit</button>
      {isSubmitted ? (
        hasError ? (
          <p>{JSON.stringify(errors)}</p>
        ) : (
          <p>{JSON.stringify(formState)}</p>
        )
      ) : null}
    </form>
  )
}

export default ControlledRegistrationForm
