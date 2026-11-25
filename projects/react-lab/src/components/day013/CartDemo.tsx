import { useState } from 'react'
const ALL_CARTS = [
  {
    id: 1,
    name: '1',
    price: 1,
  },
  {
    id: 2,
    name: '2',
    price: 2,
  },
  {
    id: 3,
    name: '3',
    price: 3,
  },
  {
    id: 4,
    name: '4',
    price: 4,
  },
]
const getCarts = () => {
  return [
    {
      id: 1,
      name: '1',
      price: 1,
      quantity: 1,
    },
    {
      id: 2,
      name: '2',
      price: 2,
      quantity: 1,
    },
    {
      id: 3,
      name: '3',
      price: 3,
      quantity: 1,
    },
  ]
}

const CartDemo = () => {
  const [carts, setCarts] = useState(() => getCarts())

  const totalCount = carts.reduce((prev, next) => prev + next.quantity, 0)
  const totalPrice = carts.reduce(
    (prev, next) => prev + next.price * next.quantity,
    0,
  )

  const handleAddCart = (id: number) => {
    setCarts((prev) => {
      const exists = prev.some((item) => item.id === id)
      return exists
        ? prev.map((v) =>
            v.id === id ? { ...v, quantity: v.quantity + 1 } : v,
          )
        : [
            ...prev,
            {
              ...ALL_CARTS.find((x) => x.id === id)!,
              quantity: 1,
            },
          ]
    })
  }

  const handleDeleteCart = (id: number) => {
    setCarts((prev) =>
      prev.map((v) =>
        v.id === id && v.quantity > 1 ? { ...v, quantity: v.quantity - 1 } : v,
      ),
    )
  }

  return (
    <div>
      {carts.map((v) => (
        <div key={v.id}>
          {v.name} - {v.price} - {v.quantity} -{' '}
          <button onClick={() => handleAddCart(v.id)}>+</button> -{' '}
          <button
            disabled={v.quantity === 1}
            onClick={() => handleDeleteCart(v.id)}
          >
            -
          </button>{' '}
          -{' '}
          <button
            onClick={() =>
              setCarts((prev) => prev.filter((p) => p.id !== v.id))
            }
          >
            del
          </button>
        </div>
      ))}
      <button onClick={() => handleAddCart(2)}>添加2</button>
      <button onClick={() => handleAddCart(4)}>添加4</button>
      <p>总数量：{totalCount}</p>
      <p>总价：{totalPrice}</p>
      <button onClick={() => setCarts([])}>clear</button>
    </div>
  )
}

export default CartDemo
