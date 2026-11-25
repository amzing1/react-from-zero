import { useReducer } from 'react'

type FetchState =
  | {
      type: 'idle'
    }
  | {
      type: 'loading'
    }
  | {
      type: 'success'
      data: string
    }
  | {
      type: 'error'
      message: string
    }
// 'FETCH_START' | 'FETCH_SUCCESS' | 'FETCH_ERROR' | 'RESET'
type Action =
  | {
      type: 'FETCH_START'
    }
  | {
      type: 'FETCH_SUCCESS'
      data: string
    }
  | {
      type: 'FETCH_ERROR'
      message: string
    }
  | {
      type: 'RESET'
    }

type FetchReducer = (state: FetchState, action: Action) => FetchState

const reducer: FetchReducer = (state, action) => {
  if (state.type === 'loading' && action.type === 'FETCH_START') {
    return state
  }
  if (
    state.type !== 'loading' &&
    (action.type === 'FETCH_SUCCESS' || action.type === 'FETCH_ERROR')
  ) {
    return state
  }
  switch (action.type) {
    case 'FETCH_START':
      return {
        type: 'loading',
      }
    case 'FETCH_SUCCESS':
      return {
        type: 'success',
        data: action.data,
      }
    case 'FETCH_ERROR':
      return {
        type: 'error',
        message: action.message,
      }
    case 'RESET':
      return {
        type: 'idle',
      }
    default: {
      const _exhaustive: never = action
      return _exhaustive
    }
  }
}

const getText = (state: FetchState) => {
  switch (state.type) {
    case 'idle':
      return 'idle'
    case 'loading':
      return '加载中'
    case 'success':
      return state.data
    case 'error':
      return state.message
  }
}

const StatusMachineDemo = () => {
  // 只需要 state 一个状态即可管理内部 isLoading / isError / data / message 等状态流转
  const [state, dispatch] = useReducer(reducer, {
    type: 'idle',
  })

  const text = getText(state)

  const handleFetchSuccess = () => {
    dispatch({
      type: 'FETCH_START',
    })
    setTimeout(() => {
      dispatch({
        type: 'FETCH_SUCCESS',
        data: 'success',
      })
    }, 1000)
  }

  const handleFetchError = () => {
    dispatch({
      type: 'FETCH_START',
    })
    setTimeout(() => {
      dispatch({
        type: 'FETCH_ERROR',
        message: 'error',
      })
    }, 1000)
  }

  return (
    <div>
      <p>status: {state.type}</p>
      <p>text: {text}</p>
      <button disabled={state.type === 'loading'} onClick={handleFetchSuccess}>start fetch success</button>
      <button disabled={state.type === 'loading'} onClick={handleFetchError}>start fetch error</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  )
}

export default StatusMachineDemo
