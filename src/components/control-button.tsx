import { ReactNode, forwardRef } from 'react'
import cx from 'classnames'
import { ChevronIcon } from '.'

interface ControlButtonProps {
  icon: ReactNode
  iconColor: 'green' | 'gold' | 'blue'
  label: string
  text: string
  className?: string
  onClick?: () => void
}

type ColorsObject = {
  [key: string]: string
}

export const ControlButton = forwardRef<HTMLButtonElement, ControlButtonProps>(
  ({ label, className, icon, iconColor, text, onClick }: ControlButtonProps, ref) => {
    const colors: ColorsObject = {
      green: 'text-green-500 bg-avocado-200',
      gold: 'bg-marigold-200 text-marigold-500',
      blue: 'bg-ocean-200 text-ocean-500',
    }

    const buttonClassList = cx(
      'mb-6 flex items-center rounded-full md:mb-0 md:p-3 md:hover:bg-neutral-100',
      className
    )

    return (
      <button ref={ref} className={buttonClassList} onClick={onClick}>
        <div className={cx('mr-6 flex rounded-full p-3', colors[iconColor])}>{icon}</div>
        <div className="pr-2 text-left">
          <div className="flex items-center text-xs uppercase text-neutral-500">
            {label} <ChevronIcon className="ml-1" />
          </div>
          <div className="text-neutral-900">{text}</div>
        </div>
      </button>
    )
  }
)
