import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const PageLayout: React.FC<Props> = ({ children }) => {
  return <div className="max-w-3xl mx-auto py-4 px-2 md:px-0">{children}</div>
}
