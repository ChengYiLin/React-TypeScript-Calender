import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { getYearArray } from '../helper'
import { CalenderContext } from '../context'

const Container = styled.div`
    flex: 1 0 auto;
`

const YearContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 60px);
    grid-auto-flow: row;
    column-gap: 10px;
    row-gap: 15px; 
    padding: 20px 14px;
`

const Year = styled.p<{isOverRange: boolean; isSelected: boolean}>`
    font-size: 20px;
    text-align: center;
    padding: 18.5px 0;
    border-radius: 50%;
    cursor: pointer;

    background-color: ${props => props.isSelected ? '#db3d44' : 'transparent'};
    color: ${props => props.isSelected ? '#ffffff' : props.isOverRange ? '#bebebe' : '#000000'};
`

interface Props {
	value: string;
	onChange: (newDate: string) => void
}

const YearPanel: FC<Props> = (props) => {
	const { value, onChange } = props
	const { viewDate, handleSelectYear } = useContext(CalenderContext)

	const YearArray = getYearArray(value, viewDate)

	return (
		<Container>
			<YearContainer>
				{YearArray.map(year => (
					<Year 
						key={year.value}
						isOverRange={year.isOverRange}
						isSelected={year.isSelected}
						onClick={() => handleSelectYear(year, onChange)} >
						{year.value}
					</Year>
				))}
			</YearContainer>
		</Container>
	)
}

export default YearPanel
