import { FunctionComponent, SVGAttributes } from 'react'

export const Icon: FunctionComponent<SVGAttributes<SVGElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <svg
      fill="currentColor"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height="21"
      width="21"
      {...otherProps}
    >
      {children}
    </svg>
  )
}
