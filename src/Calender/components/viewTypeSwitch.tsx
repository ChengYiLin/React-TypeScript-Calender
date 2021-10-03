import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
// Context
import { CalenderContext } from '../context'
import { viewTypes } from '../types/calender'
import { MonthEnum } from '../types/enum'

const Container = styled.button`
    width: 200px;
    cursor: pointer;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover{
        background-color: rgba(0, 0, 0, 0.1);    
    }
`

const Content = styled.div`
    font-size: 20px;
    padding: 5px;
`

interface DescTxtProps {
    viewType: viewTypes;
    viewDate: Date;
    
}

const ViewTypeDescTxt: FC<DescTxtProps> = (props) => {
	const {viewType, viewDate} = props

	const currentYear = dayjs(viewDate).year()
	const startYear = Math.floor(currentYear / 10) * 10
	const currentMonth = MonthEnum[dayjs(viewDate).month()]
	

	switch (viewType) {
	case 'year':
		return <span>{`${startYear} - ${startYear + 9}`}</span>
    
	case 'month':
		return <span>{currentYear}</span>

	case 'date':
		return <span>{`${currentMonth} ${currentYear}`}</span>

	default:
		return <span>{`${currentMonth} ${currentYear}`}</span>
	}
}

const ViewTypeSwitch: FC = () => {
	const { viewType, viewDate, handleChangeViewType } = useContext(CalenderContext)

	return (
		<Container onClick={() => handleChangeViewType()}>
			<Content>
				<ViewTypeDescTxt
					viewType={viewType}
					viewDate={viewDate}/>
			</Content>
		</Container>
	)
}

export default ViewTypeSwitch
