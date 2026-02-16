import React from 'react'

type Props = {}

const WelcomeMessage = (props: Props) => {
  return (
    <div className="w-1/2 px-10">
      <h1 className="text-5xl my-10">Welcome to PERN todo</h1>
      <p>A full stack web app, fully built with TypeScript using Node, Express.js, Prisma, and PostgreSQL in the backend.<br />And Next.js Tailwind in the frontend.</p>
    </div>
  )
}

export default WelcomeMessage