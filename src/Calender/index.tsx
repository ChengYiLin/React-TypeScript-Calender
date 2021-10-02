import React, { FC } from 'react'
import dayjs from 'dayjs'
import * as Styled from './style/calender.styled'
import MoveButton from './components/moveButton'
import ViewTypeSwitch from './components/viewTypeSwitch'

const Calender:FC = () => {
	console.log(`Today : ${dayjs()}`)
	
	return (
		<Styled.Container>
			<Styled.SwitchPannel>
				<MoveButton forward='prev' />
				<ViewTypeSwitch />
				<MoveButton forward='next' />
			</Styled.SwitchPannel>
			<div>
				<p>Pannel</p>
			</div>
		</Styled.Container>
	)}

export default Calender
