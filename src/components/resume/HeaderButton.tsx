import React from "react"

type Props = {
  children: string
  onClick?: () => void
}

export const HeaderButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="mx-2 my-1 md:my-0 border rounded bg-blue-500 text-gray-100 px-2 py-1"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
