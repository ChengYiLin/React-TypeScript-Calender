import React, { createContext, FC, useState, useMemo } from 'react'
import dayjs from 'dayjs'
// Tying
import { ICalenderContext, viewTypes, moveTypes,  selectedYear, selectedMonth, selectedDate} from './types/calender'
import { MonthEnum } from './types/enum'
// Helper
import { dateRegExp } from './helper'

const Today = new Date()

const CalenderContextInitState: ICalenderContext = {
	viewDate: Today,
	pickedDate: '',
	viewType: 'date',
	isInputInValid: false,
	handleDateValueChange: () => {return},
	handleDateValueKeyDown: () => {return},
	handleSelectYear: () => {return},
	handleSelectMonth: () => {return},
	handleSelectDate: () => {return},
	handleChangeViewType: () => {return},
	handleMoveAction: () => {return},
}

export const CalenderContext = createContext(CalenderContextInitState)

export const CalenderProvider: FC = ({children}) => {
	const [viewDate, setViewDate] = useState<Date>(Today)
	const [pickedDate, setPickedDate] = useState<string>('')
	const [isInputInValid, setIsInputInValid] = useState<boolean>(false)
	const [viewType, setViewType] = useState<viewTypes>('date')

	let isKeyBackspace = false

	const handleDateValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let currentValue = e.target.value

		// Auto add '-' in value
		if (!isKeyBackspace && (currentValue.length === 4 || currentValue.length === 7)) {
			currentValue += '-'
		}

		// RegExp
		if (dateRegExp.test(currentValue)) {
			if (dayjs(currentValue).isBefore(dayjs('1900-01-01')) || dayjs(currentValue).isAfter(dayjs('2099-12-31'))) {
				currentValue = '2020-01-01'
			}
			setIsInputInValid(false)
			setViewDate(dayjs(currentValue).toDate())	
		} else {
			setIsInputInValid(true)
		}

		setPickedDate(currentValue)
	}

	const handleDateValueKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isKeyBackspace = e.code === 'Backspace'		
	}

	const handleSelectYear = (year: selectedYear) => {
		const targetDate = dayjs(viewDate).year(year?.value)

		setViewDate(targetDate.toDate())
		setPickedDate(targetDate.format('YYYY-MM-DD'))
		handleChangeViewType('month')
	}

	const handleSelectMonth = (month: selectedMonth) => {
		const targetDate = dayjs(viewDate).month(MonthEnum[month.value])

		setViewDate(targetDate.toDate())
		setPickedDate(targetDate.format('YYYY-MM-DD'))
		handleChangeViewType('date')
	}

	const handleSelectDate = (date: selectedDate) => {
		const targetDate = dayjs(date.id)
		
		setViewDate(targetDate.toDate())
		setPickedDate(targetDate.format('YYYY-MM-DD'))
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
			pickedDate,
			viewType,
			isInputInValid,
			handleDateValueChange,
			handleDateValueKeyDown,
			handleSelectYear,
			handleSelectMonth,
			handleSelectDate,
			handleChangeViewType,
			handleMoveAction,
		}
	),[ viewDate, pickedDate, viewType, isInputInValid])

	return (
		<CalenderContext.Provider value={context}>
			{children}
		</CalenderContext.Provider>
	)
}