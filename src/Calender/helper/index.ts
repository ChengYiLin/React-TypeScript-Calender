import dayjs from 'dayjs'
import { selectedYear, selectedMonth, selectedDate } from '../types/calender'
import { MonthEnum, DayOfWeekEnum } from '../types/enum'

const DateRegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
export const dateRegExp = new RegExp(DateRegExp)

export const getYearArray = (pickedDate: string, viewDate: Date): selectedYear[] => {
	const startYear = Math.floor(dayjs(viewDate).year() / 10) * 10 - 1

	const result: selectedYear[] = []

	// 12 個年份為一組
	let startIndex = 0
	while(startIndex < 12) {
		const pushedYear = startYear + startIndex

		result.push({
			value: pushedYear,
			isOverRange: (startIndex === 0 || startIndex === 11),
			isSelected: (pushedYear === dayjs(pickedDate).year()) 
		})
		startIndex ++
	}

	return result
}

export const getMonthArray =  (pickedDate: string): selectedMonth[] => {
	const MonthArray: selectedMonth[] = Object.keys(MonthEnum)
		.filter(item => isNaN(parseInt(item)))
		.map(month => (
			{
				value: month,
				isSelected: month === MonthEnum[dayjs(pickedDate).month()]
			}
		))

	return MonthArray
}

export const getDayOfWeekArray =  (): string[] => {
	const DayOfWeekArray: string[] = Object.keys(DayOfWeekEnum)
		.filter(item => isNaN(parseInt(item)))
		.map(day => day)

	return DayOfWeekArray
}

export const getDateArray =  (pickedDate: string, viewDate: Date): selectedDate[][] => {
	const DateArray: selectedDate[][] = []
	const firstDateOfThisMonth = dayjs(viewDate).startOf('month')

	for (let week=0; week<6; week++) {
		const DateArrayForThisWeek = []
		const firstDateOfThisWeek = firstDateOfThisMonth.startOf('week').add(week, 'week')

		for(let date=0; date<7; date++) {
			const pushedDate = firstDateOfThisWeek.add(date, 'day')
			DateArrayForThisWeek.push({
				id: pushedDate.format('YYYY/MM/DD'),
				value: pushedDate.date(),
				isOverRange: pushedDate.month() !== dayjs(viewDate).month(),
				isSelected: dayjs(pickedDate).isSame(pushedDate, 'date'),
				isToday: dayjs().isSame(pushedDate, 'date'),
			})
		}

		DateArray.push(DateArrayForThisWeek)
	}

	return DateArray
}