import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.button`
    background: transparent;
    cursor: pointer;
`

const Arrow = styled.p`
    font-size: 12px;
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
    forward: 'next' | 'prev';
}

const MoveButton:FC<Props> = (props) => {
	const {forward} = props

	const handleButtonClick = () => {
		console.log('Click')
		console.log(`forward : ${forward}`)
	}

	return (
		<Container>
			<Arrow onClick={handleButtonClick}>
				{(forward === 'prev') ?
					<span>&#60;</span> :
					<span>&#62;</span>
				}
			</Arrow>
		</Container>
	)
}

export default MoveButton
