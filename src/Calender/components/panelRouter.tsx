import React, { FC, useContext } from 'react'
// Context
import { CalenderContext } from '../context'
// Components
import YearPanel from './yearPanel'
import MonthPanel from './monthPanel'
import DatePanel from './datePanel'

interface Props {
	toggleOpenCalender: () => void
}

const PanelRouter: FC<Props> = (props) => {
	const { toggleOpenCalender } = props
	const { viewType } = useContext(CalenderContext)
        
	switch (viewType) {
	case 'year':
		return <YearPanel />
	case 'month':
		return <MonthPanel />
	case 'date':
		return <DatePanel toggleOpenCalender={toggleOpenCalender} />
	default:
		return <DatePanel toggleOpenCalender={toggleOpenCalender} />
	}
}

export default PanelRouter
