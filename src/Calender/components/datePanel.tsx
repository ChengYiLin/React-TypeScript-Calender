import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { CalenderContext } from '../context'
import { getDayOfWeekArray, getDateArray } from '../helper'

const Container = styled.div`
    padding: 5px 14px;
`

const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`

const Cell = styled.div`
    flex: 0 0 28px;
    padding: 5px 0;
    text-align: center;
`

const DayCell = styled(Cell)`
    font-weight: bolder;
`

const DateCell = styled(Cell)<{ isOverRange: boolean; isSelected: boolean; isToday: boolean; }>`
    border-radius: 50%;
    cursor: pointer;

    background-color: ${props => props.isSelected ? '#db3d44' : 'transparent'};
    color: ${props => props.isSelected ? 
		'#ffffff' : props.isOverRange ?
			'#bebebe' : props.isToday ?
				'#db3b44' : '#000000'
};
`

interface Props {
	value: string;
	onChange: (newDate: string) => void
	toggleOpenCalender: () => void
}

const DatePanel: FC<Props> = (props) => {
	const { value, onChange, toggleOpenCalender } = props
	const { viewDate, handleSelectDate } = useContext(CalenderContext)

	const DayOfWeekArray = getDayOfWeekArray()
	const DateArray = getDateArray(value, viewDate)

	return (
		<Container>
			{/* Day */}
			<RowContainer>
				{DayOfWeekArray.map(day => (
					<DayCell key={day}>
						{day}
					</DayCell>
				))}
			</RowContainer>
			{/* Date */}
			{DateArray.map(week => (
				<RowContainer key={`w_${week[0].id}`}>
					{week.map( date => (
						<DateCell
							key={date.id}
							isOverRange={date.isOverRange}
							isSelected={date.isSelected}
							isToday={date.isToday}
							onClick={() => {handleSelectDate(date, onChange); toggleOpenCalender()}}>
							{date.value}
						</DateCell>
					))}
				</RowContainer>
			))}
		</Container>
	)
}

export default DatePanel
