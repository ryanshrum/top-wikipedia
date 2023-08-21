import { FunctionComponent, PropsWithChildren, memo } from 'react'

export const Header: FunctionComponent<PropsWithChildren> = memo(
  ({ children }) => (
    <div className="py-8 text-center md:py-14">
      <h1 className="font-serif text-2xl font-normal tracking-[-0.56px] text-neutral-900 md:text-4xl md:tracking-[-0.8px]">
        {children}
      </h1>
    </div>
  )
)
