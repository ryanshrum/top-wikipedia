import { PropsWithChildren } from 'react'

export const Card = ({ children }: PropsWithChildren) => (
  <div className="md:shadow-card bg-neutral-000 mt-6 p-6 md:rounded-2xl">{children}</div>
)
