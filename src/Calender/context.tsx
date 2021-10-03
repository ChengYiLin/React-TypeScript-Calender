import React, { createContext, FC, useState, useMemo } from 'react'
import dayjs from 'dayjs'
// Tying
import { ICalenderContext, viewTypes, moveTypes,  selectedYear, selectedMonth, selectedDate} from './types/calender'
// Helper
import { MonthEnum } from './types/enum'

const Today = new Date()

const CalenderContextInitState: ICalenderContext = {
	currentDate: Today,
	viewType: 'date',
	handleSelectYear: () => {return},
	handleSelectMonth: () => {return},
	handleSelectDate: () => {return},
	handleChangeViewType: () => {return},
	handleMoveAction: () => {return},
}

export const CalenderContext = createContext(CalenderContextInitState)

export const CalenderProvider: FC = ({children}) => {
	const [currentDate, setCurrentDate] = useState<Date>(Today)
	const [viewType, setViewType] = useState<viewTypes>('date')

	const handleSelectYear = (year: selectedYear) => {
		const targetDate = dayjs(currentDate).year(year?.value).toDate()

		setCurrentDate(targetDate)
		handleChangeViewType('month')
	}

	const handleSelectMonth = (month: selectedMonth) => {
		const targetDate = dayjs(currentDate).month(MonthEnum[month.value]).toDate()

		setCurrentDate(targetDate)
		handleChangeViewType('date')
	}

	const handleSelectDate = (date: selectedDate) => {
		const targetDate = dayjs(date.id).toDate()
		
		setCurrentDate(targetDate)
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
			dayjs(currentDate).add(duration, moveType).toDate() :
			dayjs(currentDate).subtract(duration, moveType).toDate()

		setCurrentDate(targetDate)
	}

	const context = useMemo(() => (
		{
			currentDate,
			viewType,
			handleSelectYear,
			handleSelectMonth,
			handleSelectDate,
			handleChangeViewType,
			handleMoveAction,
		}
	),[currentDate, viewType])

	return (
		<CalenderContext.Provider value={context}>
			{children}
		</CalenderContext.Provider>
	)
}