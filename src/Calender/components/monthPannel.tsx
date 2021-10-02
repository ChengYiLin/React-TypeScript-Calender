import React, { FC } from 'react'
import styled from 'styled-components'
import { MonthEnum } from '../types/enum'

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

const Month = styled.p`
    font-size: 20px;
    text-align: center;
    padding: 18.5px 0;
    border-radius: 50%;
    cursor: pointer;
`
const MonthArray = Object.keys(MonthEnum).filter(item => isNaN(parseInt(item)))

const MonthPannel:FC = () => {
	const hacndleMonthClcik = (month: string) => {
		console.log(`Click Month : ${month}`)
	}

	return (
		<Container>
			<MonthContainer>
				{MonthArray.map(month => (
					<Month key={month} onClick={() => hacndleMonthClcik(month)}>
						{month}
					</Month>
				))}
			</MonthContainer>
		</Container>
	)
}

export default MonthPannel
