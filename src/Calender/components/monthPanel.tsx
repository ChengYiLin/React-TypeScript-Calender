import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { getMonthArray } from '../helper'
import { CalenderContext } from '../context'

const Container = styled.div`
    flex: 1 0 auto;
`

const MonthContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 60px);
    grid-auto-flow: row;
    column-gap: 10px;
    row-gap: 15px; 
    padding: 20px 14px;
`

const Month = styled.p<{isSelected: boolean}>`
    font-size: 20px;
    text-align: center;
    padding: 18.5px 0;
    border-radius: 50%;
    cursor: pointer;

	background-color: ${props => props.isSelected ? '#db3d44' : 'transparent'};
	color: ${props => props.isSelected ? '#ffffff' : '#000000'};
`

interface Props {
	value: string;
	onChange: (newDate: string) => void
}

const MonthPanel: FC<Props> = (props) => {
	const { value, onChange } = props
	const { handleSelectMonth } = useContext(CalenderContext)
	
	const MonthArray = getMonthArray(value)

	return (
		<Container>
			<MonthContainer>
				{MonthArray.map(month => (
					<Month 
						key={month.value}
						isSelected={month.isSelected}
						onClick={() => handleSelectMonth(month, onChange)}>
						{month.value}
					</Month>
				))}
			</MonthContainer>
		</Container>
	)
}

export default MonthPanel
