import React, { FC, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Calender from './Calender'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App:FC = () => {
	const [date, setDate] = useState<string>('2021-10-10')

	const handleDateChange = (newDate: string) => {
		setDate(newDate)
	}

	return (
		<Wrapper>
			<h1>React Calender</h1>
			<Calender
				value={date}
				onChange={handleDateChange}
			/>
		</Wrapper>
	)

}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
)
