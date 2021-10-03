import React, { FC, useContext } from 'react'
import styled from 'styled-components'
// Context
import { CalenderContext } from '../context'

const Container = styled.div<{isInputInValid: boolean;}>`
    padding: 10px 12px;
	border: 1px solid ${props => props.isInputInValid ? 'red' : '#000000'};;
	border-radius: 5px;
`

const Input = styled.input`
	padding: 5px;
	border: none;
`

const OpenButton = styled.button`
    background: transparent;
    cursor: pointer;
`

interface Props {
	toggleOpenCalender: () => void
}

const InputBar: FC<Props> = (props) => {
	const { toggleOpenCalender } = props

	const { 
		pickedDate,
		isInputInValid,
		handleDateValueChange,
		handleDateValueKeyDown
	} = useContext(CalenderContext)

	return (
		<Container isInputInValid={isInputInValid}>
			<Input 
				type='text'
				value={pickedDate}
				placeholder='YYYY-MM-DD'
				maxLength={10}
				onChange={e => handleDateValueChange(e)}
				onKeyDown={e => handleDateValueKeyDown(e)}/>
			<OpenButton onClick={() => toggleOpenCalender()}>
				<span>&#9777;</span>
			</OpenButton>
		</Container>
	)
}

export default InputBar
