import React, { FC, useContext } from 'react'
// Context
import { CalenderContext } from '../context'
// Components
import YearPanel from './yearPanel'
import MonthPanel from './monthPanel'


const PanelRouter: FC = () => {
	const { viewType } = useContext(CalenderContext)
        
	switch (viewType) {
	case 'year':
		return <YearPanel />
	case 'month':
		return <MonthPanel />
	default:
		return <MonthPanel />
	}
}

export default PanelRouter
