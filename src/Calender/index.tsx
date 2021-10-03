import React, { FC, useState } from 'react'
import * as Styled from './style/calender.styled'
// Context
import { CalenderProvider } from './context'
// Components
import InputBar from './components/inputBar'
import MoveButton from './components/moveButton'
import ViewTypeSwitch from './components/viewTypeSwitch'
import PanelRouter from './components/panelRouter'

interface Props {
	value: string;
	onChange: (newDate: string) => void
}

const Calender: FC<Props> = (props) => {
	const { value, onChange } = props

	const [openCalender, setOpenCalender] = useState(false)

	const toggleOpenCalender = () => {
		setOpenCalender(prev => !prev)
	}

	return (
		<CalenderProvider>
			<Styled.Container>
				<InputBar
					value={value}
					onChange={onChange}
					toggleOpenCalender={toggleOpenCalender} />
				{openCalender && (
					<Styled.CalenderContainer>
						<Styled.SwitchPanel>
							<MoveButton
								direction='prev'
								onChange={onChange}/>
							<ViewTypeSwitch />
							<MoveButton
								direction='next'
								onChange={onChange}/>
						</Styled.SwitchPanel>
						<PanelRouter
							value={value}
							onChange={onChange}
							toggleOpenCalender={toggleOpenCalender} />
					</Styled.CalenderContainer>
				)}
			</Styled.Container>
		</CalenderProvider>
	)}

export default Calender
