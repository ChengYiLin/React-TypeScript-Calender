import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
// Context
import { CalenderContext } from '../context'

const Container = styled.div`
    padding: 10px 12px;
`

const InputBar: FC = () => {
	const { currentDate, viewType } = useContext(CalenderContext)

	return (
		<Container>
			<p>viewType : {viewType}</p>
			<p>{dayjs(currentDate).format('YYYY/MM/DD')}</p>
		</Container>
	)
}

export default InputBar
