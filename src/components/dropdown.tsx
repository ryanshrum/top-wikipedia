import React, { ReactNode, useState } from 'react'
import cx from 'classnames'
import { ChevronIcon, ListIcon } from '.'

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
  const [isOpen, setIsOpen] = useState(true)
  const dropdownClassList = cx(
    'bg-neutral-000 shadow-calendar z-10 rounded-3xl py-6 absolute w-52',
    {
      hidden: !isOpen,
    }
  )
  const buttonClassList = cx(
    'mb-6 flex items-center rounded-full md:mb-0 md:p-3 md:hover:bg-neutral-100',
    { 'md:bg-neutral-100': isOpen }
  )

  const onClickHandler = (option: number) => {
    setIsOpen(false)
    onClick(option)
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={buttonClassList}>
        <div className="bg-marigold-200 text-marigold-500 mr-6 flex rounded-full p-3">
          <ListIcon />
        </div>
        <div className="pr-4">
          <div className="flex items-center text-xs uppercase text-neutral-500">
            Num. Results <ChevronIcon className="ml-1" />
          </div>
          <div className="text-left text-neutral-900">{selected}</div>
        </div>
      </button>
      <ul className={dropdownClassList}>
        {options.map((option) => {
          const optionClassList = cx('cursor-pointer px-4 py-2 text-center', {
            'bg-ivy-300 text-green-500': selected === option,
            'mb-2': option !== options[options.length - 1],
          })

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
    </>
  )
}