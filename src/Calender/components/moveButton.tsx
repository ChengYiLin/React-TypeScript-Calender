import React, { FC, useContext } from 'react'
import styled from 'styled-components'
// Context
import { CalenderContext } from '../context'
// Types
import { moveTypes } from '../types/calender'

const Container = styled.button`
    background: transparent;
    cursor: pointer;
`

const Arrow = styled.p`
    font-size: 16px;
    font-weight: bolder;
    padding: 10px 14px;
    border-radius: 50%;
    background-color: transparent;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover{
        background-color: rgba(0, 0, 0, 0.05);    
    }
`

interface Props {
    direction: moveTypes;
}

const MoveButton: FC<Props> = (props) => {
	const { direction } = props
	const { viewType, handleMoveViewYear } = useContext(CalenderContext)

	const handleMoveAction = () => {
		if (viewType !== 'date') {
			handleMoveViewYear(direction)
		}
	}

	return (
		<Container>
			<Arrow onClick={handleMoveAction}>
				{(direction === 'prev') ?
					<span>&#60;</span> :
					<span>&#62;</span>
				}
			</Arrow>
		</Container>
	)
}

export default MoveButton
