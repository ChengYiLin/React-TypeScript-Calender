import React, { createContext, FC, useState, useMemo } from 'react'
import dayjs from 'dayjs'
// Tying
import { ICalenderContext, viewTypes, moveTypes,  selectedYear, selectedMonth} from './types/calender'
// Helper
import { MonthEnum } from './types/enum'

const Today = new Date()

const CalenderContextInitState: ICalenderContext = {
	currentDate: Today,
	viewType: 'month',
	handleSelectYear: () => {return},
	handleSelectMonth: () => {return},
	handleChangeViewType: () => {return},
	handleMoveViewYear: () => {return},
}

export const CalenderContext = createContext(CalenderContextInitState)

export const CalenderProvider: FC = ({children}) => {
	const [currentDate, setCurrentDate] = useState<Date>(Today)
	const [viewType, setViewType] = useState<viewTypes>('month')

	const handleSelectYear = (year: selectedYear) => {
		const targetDate = dayjs(currentDate).year(year?.value).toDate()

		setCurrentDate(targetDate)
		handleChangeViewType('month')
	}

	const handleSelectMonth = (month: selectedMonth) => {
		const targetDate = dayjs(currentDate).month(MonthEnum[month.value]).toDate()

		setCurrentDate(targetDate)
		handleChangeViewType('year')
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

	const handleMoveViewYear = (direction: moveTypes) => {
		const targetDate = (direction === 'next') ?
			dayjs(currentDate).add(10, 'year').toDate() :
			dayjs(currentDate).subtract(10, 'year').toDate()

		setCurrentDate(targetDate)
	}

	const context = useMemo(() => (
		{
			currentDate,
			viewType,
			handleSelectYear,
			handleSelectMonth,
			handleChangeViewType,
			handleMoveViewYear,
		}
	),[currentDate, viewType])

	return (
		<CalenderContext.Provider value={context}>
			{children}
		</CalenderContext.Provider>
	)
}