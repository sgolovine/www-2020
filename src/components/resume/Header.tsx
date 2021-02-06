import React from "react"
import { HeaderButton } from "~/components/common/HeaderButton"
import { useRouter } from "next/router"

export const Header = () => {
  const router = useRouter()
  return (
    <div className="flex flex-row items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold">Sunny Golovine</h1>
        <p className="text-sm font-light text-gray-700">
          Full Stack Software Engineer
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <HeaderButton onClick={() => router.push("/doc/resume.pdf")}>
          Download
        </HeaderButton>
        <HeaderButton onClick={() => router.push("/print")}>Print</HeaderButton>
      </div>
    </div>
  )
}
