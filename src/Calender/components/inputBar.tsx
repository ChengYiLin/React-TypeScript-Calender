import React, { FC, useContext, useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
// Helper
import { dateRegExp } from '../helper'
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
	value: string;
	onChange: (newDate: string) => void
	toggleOpenCalender: () => void
}

const InputBar: FC<Props> = (props) => {
	const { value, onChange, toggleOpenCalender } = props

	const [isInputInValid, setIsInputInValid] = useState(false)
	const [isKeyBackspace, setIsKeyBackspace] = useState(false)

	const { setViewDate, handleChangeViewType } = useContext(CalenderContext)

	const handleDateValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let currentValue = e.target.value

		// Auto add '-' in value
		if (!isKeyBackspace && (currentValue.length === 4 || currentValue.length === 7)) {
			currentValue += '-'
		}

		// RegExp
		setIsInputInValid(!dateRegExp.test(currentValue))
		if (dateRegExp.test(currentValue)) {
			if (dayjs(currentValue).isBefore(dayjs('1900-01-01')) || dayjs(currentValue).isAfter(dayjs('2099-12-31'))) {
				currentValue = '2020-01-01'
			}
			handleChangeViewType('date')
			setViewDate(dayjs(currentValue).toDate())	
		}
		onChange(currentValue)
	}

	const handleDateValueKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		setIsKeyBackspace(e.code === 'Backspace')

		if (e.code === 'Enter') {
			toggleOpenCalender()
		}
	}

	return (
		<Container isInputInValid={isInputInValid}>
			<Input 
				type='text'
				value={value}
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
