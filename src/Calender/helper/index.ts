import dayjs from 'dayjs'
import { selectedVale } from '../types/calender'

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
