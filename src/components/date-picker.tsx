import { memo } from 'react'
import ReactDatePicker from 'react-datepicker'
import { CalendarIcon, ChevronIcon, ControlButton } from '.'
import { YESTERDAY } from '../constants'
import { formatDateReadable } from '../utilities'

interface DatePickerProps {
  date: Date
  onChange: (date: Date) => void
}

export const DatePicker = memo(
  ({ date = YESTERDAY, onChange }: DatePickerProps) => (
    <ReactDatePicker
      maxDate={YESTERDAY}
      selected={date}
      customInput={
        <ControlButton
          icon={<CalendarIcon />}
          iconColor="green"
          label="Date"
          text={formatDateReadable(date)}
          className="md:w-64"
        />
      }
      previousMonthButtonLabel={<ChevronIcon className="rotate-90" />}
      nextMonthButtonLabel={<ChevronIcon className="-rotate-90" />}
      onChange={(date: Date) => onChange(date)}
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
      popperClassName="bg-neutral-000 shadow-calendar rounded-3xl px-4 py-8 z-10"
      renderCustomHeader={({
        monthDate,
        decreaseMonth,
        increaseMonth,
        nextMonthButtonDisabled,
      }) => {
        return (
          <div className="mb-8 flex items-center justify-between">
            <button onClick={() => decreaseMonth()}>
              <ChevronIcon className="rotate-90" />
            </button>
            {monthDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
            {nextMonthButtonDisabled ? (
              // hack: justify-between
              <div />
            ) : (
              <button onClick={() => increaseMonth()}>
                <ChevronIcon className="-rotate-90" />
              </button>
            )}
          </div>
        )
      }}
    />
  )
)
