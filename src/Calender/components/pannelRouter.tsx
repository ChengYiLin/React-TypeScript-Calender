import React, { FC, useContext } from 'react'
// Context
import { CalenderContext } from '../context'
// Components
import YearPannel from './yearPannel'
import MonthPannel from './monthPannel'


const PannelRouter: FC = () => {
	const { viewType } = useContext(CalenderContext)
        
	switch (viewType) {
	case 'year':
		return <YearPannel />
	case 'month':
		return <MonthPannel />
	default:
		return <MonthPannel />
	}
}

export default PannelRouter
