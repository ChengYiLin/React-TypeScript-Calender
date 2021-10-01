import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Calender from './Calender'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => (
	<Wrapper>
		<Calender />
	</Wrapper>
)

ReactDOM.render(
	<App />,
	document.getElementById('root'),
)
