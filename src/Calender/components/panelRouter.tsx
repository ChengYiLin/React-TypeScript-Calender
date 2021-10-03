import React, { FC, useContext } from 'react'
// Context
import { CalenderContext } from '../context'
// Components
import YearPanel from './yearPanel'
import MonthPanel from './monthPanel'
import DatePanel from './datePanel'

const PanelRouter: FC = () => {
	const { viewType } = useContext(CalenderContext)
        
	switch (viewType) {
	case 'year':
		return <YearPanel />
	case 'month':
		return <MonthPanel />
	case 'date':
		return <DatePanel />
	default:
		return <DatePanel />
	}
}

export default PanelRouter
