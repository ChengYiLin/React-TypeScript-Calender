import React, { FC, useState } from 'react'
import * as Styled from './style/calender.styled'
// Context
import { CalenderProvider } from './context'
// Components
import InputBar from './components/inputBar'
import MoveButton from './components/moveButton'
import ViewTypeSwitch from './components/viewTypeSwitch'
import PanelRouter from './components/panelRouter'

const Calender: FC = () => {
	const [openCalender, setOpenCalender] = useState(false)

	const toggleOpenCalender = () => {
		setOpenCalender(prev => !prev)
	}

	return (
		<CalenderProvider>
			<Styled.Container>
				<InputBar toggleOpenCalender={toggleOpenCalender} />
				{openCalender && (
					<Styled.CalenderContainer>
						<Styled.SwitchPanel>
							<MoveButton direction='prev' />
							<ViewTypeSwitch />
							<MoveButton direction='next' />
						</Styled.SwitchPanel>
						<PanelRouter toggleOpenCalender={toggleOpenCalender} />
					</Styled.CalenderContainer>
				)}
			</Styled.Container>
		</CalenderProvider>
	)}

export default Calender
