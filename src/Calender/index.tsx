import React, { FC } from 'react'
import * as Styled from './style/calender.styled'
// Context
import { CalenderProvider } from './context'
// Components
import InputBar from './components/inputBar'
import MoveButton from './components/moveButton'
import ViewTypeSwitch from './components/viewTypeSwitch'
import PannelRouter from './components/pannelRouter'

const Calender: FC = () => {
	return (
		<CalenderProvider>
			<Styled.Container>
				<InputBar />
				<Styled.CalenderContainer>
					<Styled.SwitchPannel>
						<MoveButton direction='prev' />
						<ViewTypeSwitch />
						<MoveButton direction='next' />
					</Styled.SwitchPannel>
					<PannelRouter />
				</Styled.CalenderContainer>
			</Styled.Container>
		</CalenderProvider>
	)}

export default Calender
