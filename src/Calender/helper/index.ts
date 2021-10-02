import dayjs from 'dayjs'
import { selectedVale } from '../types/calender'
import { MonthEnum } from '../types/enum'

export const getViewYearRange = (currentDate: Date): selectedVale[] => {
	const startYear = Math.floor(dayjs(currentDate).year() / 10) * 10 - 1

	const result: selectedVale[] = []

	// 12 個年份為一組
	let startIndex = 0
	while(startIndex < 12) {
		const pushedYear = startYear + startIndex

		result.push({
			value: pushedYear,
			isOverRange: (startIndex === 0 || startIndex === 11),
			isSelected: (pushedYear === dayjs().year()) 
		})
		startIndex ++
	}

	return result
}

export const getMonthArray =  (currentDate: Date): selectedVale[] => {
	const MonthArray: selectedVale[] = Object.keys(MonthEnum)
		.filter(item => isNaN(parseInt(item)))
		.map(month => (
			{
				value: month,
				isOverRange: false,
				isSelected: month === MonthEnum[dayjs(currentDate).month()]
			}
		))

	return MonthArray
}