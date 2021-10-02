import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
// Context
import { CalenderContext } from '../context'
import { viewTypes } from '../types/calender'

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
    currentDate: Date;
    
}

const ViewTypeDescTxt: FC<DescTxtProps> = (props) => {
	const {viewType, currentDate} = props

	const startYear = Math.floor(dayjs(currentDate).year() / 10) * 10

	switch (viewType) {
	case 'year':
		return <span>{`${startYear} - ${startYear + 9}`}</span>
    
	case 'month':
		return <span>{dayjs(currentDate).year()}</span>

	default:
		return <span>{`${dayjs(currentDate).month()} ${dayjs(currentDate).year()}`}</span>
	}
}

const ViewTypeSwitch: FC = () => {
	const { viewType, currentDate, handleChangeViewType } = useContext(CalenderContext)

	return (
		<Container onClick={() => handleChangeViewType()}>
			<Content>
				<ViewTypeDescTxt
					viewType={viewType}
					currentDate={currentDate}/>
			</Content>
		</Container>
	)
}

export default ViewTypeSwitch
