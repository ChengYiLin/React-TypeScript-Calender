import React, { createContext, FC, useState, useMemo } from 'react'
import dayjs from 'dayjs'
// Tying
import { ICalenderContext, viewTypes, selectedValue, moveTypes } from './types/calender'
// Helper
import { getViewYearRange } from './helper'

const Today = new Date()

const CalenderContextInitState: ICalenderContext = {
	currentDate: Today,
	viewType: 'month',
	viewYearArray: (getViewYearRange(Today)),
	handleMoveViewYear: () => {return},
}

export const CalenderContext = createContext(CalenderContextInitState)

export const CalenderProvider: FC = ({children}) => {
	const [currentDate, setCurrentDate] = useState<Date>(Today)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [viewType, setViewType] = useState<viewTypes>('month')
	const [viewYearArray, setViewYearArray] = useState<selectedValue[]>(getViewYearRange(Today))

	const handleMoveViewYear = (direction: moveTypes): void => {
		const targetDate = (direction === 'next') ?
			dayjs(currentDate).add(12, 'year').toDate() :
			dayjs(currentDate).subtract(12, 'year').toDate()

		setCurrentDate(targetDate)
		setViewYearArray(getViewYearRange(targetDate))
	}

	const context = useMemo(() => (
		{
			currentDate,
			viewType,
			viewYearArray,
			handleMoveViewYear,
		}
	),[currentDate, viewType, viewYearArray])

	return (
		<CalenderContext.Provider value={context}>
			{children}
		</CalenderContext.Provider>
	)
}