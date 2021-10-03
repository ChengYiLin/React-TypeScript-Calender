import React, { FC, useContext } from 'react'
// Context
import { CalenderContext } from '../context'
// Components
import YearPanel from './yearPanel'
import MonthPanel from './monthPanel'
import DatePanel from './datePanel'

interface Props {
	value: string;
	onChange: (newDate: string) => void
	toggleOpenCalender: () => void
}

const PanelRouter: FC<Props> = (props) => {
	const { value, onChange, toggleOpenCalender } = props
	const { viewType } = useContext(CalenderContext)
        
	switch (viewType) {
	case 'year':
		return <YearPanel value={value} onChange={onChange}/>
	case 'month':
		return <MonthPanel value={value} onChange={onChange} />
	case 'date':
		return <DatePanel
			value={value}
			onChange={onChange}
			toggleOpenCalender={toggleOpenCalender}/>
	default:
		return <DatePanel
			value={value}
			onChange={onChange}
			toggleOpenCalender={toggleOpenCalender}/>
	}
}

export default PanelRouter
