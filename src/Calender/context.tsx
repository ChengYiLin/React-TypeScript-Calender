import React, { createContext, FC, useState, useMemo } from 'react'
import dayjs from 'dayjs'
// Tying
import { ICalenderContext, viewTypes, moveTypes,  selectedYear, selectedMonth, selectedDate} from './types/calender'
import { MonthEnum } from './types/enum'

const Today = new Date()

const CalenderContextInitState: ICalenderContext = {
	viewDate: Today,
	viewType: 'date',
	setViewDate: () => {return},
	handleSelectYear: () => {return},
	handleSelectMonth: () => {return},
	handleSelectDate: () => {return},
	handleChangeViewType: () => {return},
	handleMoveAction: () => {return},
}

export const CalenderContext = createContext(CalenderContextInitState)

export const CalenderProvider: FC = ({children}) => {
	const [viewDate, setViewDate] = useState<Date>(Today)
	const [viewType, setViewType] = useState<viewTypes>('date')

	const handleSelectYear = (year: selectedYear, onChange: (newDate: string) => void) => {
		const targetDate = dayjs(viewDate).year(year?.value)

		setViewDate(targetDate.toDate())
		onChange(targetDate.format('YYYY-MM-DD'))
		handleChangeViewType('month')
	}

	const handleSelectMonth = (month: selectedMonth, onChange: (newDate: string) => void) => {
		const targetDate = dayjs(viewDate).month(MonthEnum[month.value])

		setViewDate(targetDate.toDate())
		onChange(targetDate.format('YYYY-MM-DD'))
		handleChangeViewType('date')
	}

	const handleSelectDate = (date: selectedDate, onChange: (newDate: string) => void) => {
		const targetDate = dayjs(date.id)
		
		setViewDate(targetDate.toDate())
		onChange(targetDate.format('YYYY-MM-DD'))
	}

	const handleChangeViewType = (target?: viewTypes) => {
		if (target) {
			setViewType(target)
			return
		}

		switch (viewType) {
		case 'date':
			setViewType('month')
			return
		case 'month':
			setViewType('year')
			return
		default:
			return
		}
	}

	const handleMoveAction = (direction: moveTypes) => {
		const duration = (viewType === 'year') ? 10 : 1
		const moveType = (viewType !== 'date') ? 'year' : 'month'

		const targetDate = (direction === 'next') ?
			dayjs(viewDate).add(duration, moveType).toDate() :
			dayjs(viewDate).subtract(duration, moveType).toDate()

		setViewDate(targetDate)
	}

	const context = useMemo(() => (
		{
			viewDate,
			viewType,
			setViewDate,
			handleSelectYear,
			handleSelectMonth,
			handleSelectDate,
			handleChangeViewType,
			handleMoveAction,
		}
	),[viewDate, viewType, setViewDate])

	return (
		<CalenderContext.Provider value={context}>
			{children}
		</CalenderContext.Provider>
	)
}