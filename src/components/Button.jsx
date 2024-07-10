import React from 'react'

const Button = ({text,type}) => {
  return (
    <button className={type == 'fill' ? "bg-primary text-white px-4 py-1 rounded": "text-primary border-primary capitalize border px-4 py-1 rounded"}>{text}</button>
  )
}

export default Button