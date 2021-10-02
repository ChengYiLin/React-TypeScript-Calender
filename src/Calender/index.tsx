import React, { FC } from 'react'
import * as Styled from './style/calender.styled'
// Context
import { CalenderProvider } from './context'
// Components
import InputBar from './components/inputBar'
import MoveButton from './components/moveButton'
import ViewTypeSwitch from './components/viewTypeSwitch'
import PanelRouter from './components/panelRouter'

const Calender: FC = () => {
	return (
		<CalenderProvider>
			<Styled.Container>
				<InputBar />
				<Styled.CalenderContainer>
					<Styled.SwitchPanel>
						<MoveButton direction='prev' />
						<ViewTypeSwitch />
						<MoveButton direction='next' />
					</Styled.SwitchPanel>
					<PanelRouter />
				</Styled.CalenderContainer>
			</Styled.Container>
		</CalenderProvider>
	)}

export default Calender
