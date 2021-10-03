import React, { FC, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Calender from './Calender'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  font-family: 'Arial', sans-serif;
`

const App:FC = () => {
	const [date, setDate] = useState<string>('1997-02-17')

	const handleDateChange = (newDate: string) => {
		setDate(newDate)
	}

	return (
		<Wrapper>
			<h1>Hi ! React Calender</h1>
			<p>I am Cheng Yi Lin, also can call me Martin</p>
			<p>I Built it by React, TypeScript and Webpack</p>
			<p>Hope You Like it 😁</p>
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
