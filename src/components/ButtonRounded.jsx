import React from 'react'

const ButtonRounded = ({text,type}) => {
  return (
    <button className={type == 'fill' ? "bg-primaryHover text-white rounded-full capitalize px-4 py-1": "text-darkGray border-gray/[.3] rounded-full capitalize border px-4 py-1"}>{text}</button>
  )
}

export default ButtonRounded