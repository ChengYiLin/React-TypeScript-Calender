import React, { FC } from 'react'
import dayjs from 'dayjs'
import * as Styled from './style/calender.styled'
// Components
import MoveButton from './components/moveButton'
import ViewTypeSwitch from './components/viewTypeSwitch'
import MonthPannel from './components/monthPannel'


const Calender:FC = () => {
	console.log(`Today : ${dayjs()}`)
	
	return (
		<Styled.Container>
			<Styled.SwitchPannel>
				<MoveButton forward='prev' />
				<ViewTypeSwitch />
				<MoveButton forward='next' />
			</Styled.SwitchPannel>
			<MonthPannel />
		</Styled.Container>
	)}

export default Calender
