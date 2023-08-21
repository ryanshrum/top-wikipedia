import { ReactNode, useRef, useState } from 'react'
import cx from 'classnames'
import { ControlButton, ListIcon } from '.'
import { useClickOutside } from '../hooks/useClickOutside'

interface DropdownProps {
  button?: ReactNode
  options: number[]
  selected: number
  onClick: (selected: number) => void
}

export const Dropdown = ({
  button,
  onClick,
  options,
  selected,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLInputElement>(null)
  useClickOutside(dropdownRef, () => {
    setIsOpen(false)
  })

  const dropdownClassList = cx(
    'bg-neutral-000 shadow-calendar z-10 rounded-3xl py-6 absolute w-52',
    {
      hidden: !isOpen,
    }
  )
  const onClickHandler = (option: number) => {
    setIsOpen(false)
    onClick(option)
  }

  return (
    <div ref={dropdownRef}>
      <ControlButton
        icon={<ListIcon />}
        iconColor="gold"
        label="Num. Results"
        text={selected.toString()}
        className={cx('md:w-50', { 'md:bg-neutral-100': isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul className={dropdownClassList}>
        {options.map((option) => {
          const optionClassList = cx(
            'cursor-pointer px-4 py-2 text-center md:hover:bg-neutral-100',
            {
              'bg-ivy-300 text-green-500': selected === option,
              'mb-2': option !== options[options.length - 1],
            }
          )

          return (
            <li
              key={option}
              onClick={() => onClickHandler(option)}
              className={optionClassList}
            >
              {option}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
