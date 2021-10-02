import dayjs from 'dayjs'
import { selectedYear, selectedMonth } from '../types/calender'
import { MonthEnum } from '../types/enum'

export const getYearArray = (currentDate: Date): selectedYear[] => {
	const startYear = Math.floor(dayjs(currentDate).year() / 10) * 10 - 1

	const result: selectedYear[] = []

	// 12 個年份為一組
	let startIndex = 0
	while(startIndex < 12) {
		const pushedYear = startYear + startIndex

		result.push({
			value: pushedYear,
			isOverRange: (startIndex === 0 || startIndex === 11),
			isSelected: (pushedYear === dayjs(currentDate).year()) 
		})
		startIndex ++
	}

	return result
}

export const getMonthArray =  (currentDate: Date): selectedMonth[] => {
	const MonthArray: selectedMonth[] = Object.keys(MonthEnum)
		.filter(item => isNaN(parseInt(item)))
		.map(month => (
			{
				value: month,
				isSelected: month === MonthEnum[dayjs(currentDate).month()]
			}
		))

	return MonthArray
}