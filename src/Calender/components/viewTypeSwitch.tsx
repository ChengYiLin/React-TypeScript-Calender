import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
// Context
import { CalenderContext } from '../context'

const Container = styled.button`
    width: 200px;
    cursor: pointer;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover{
        background-color: rgba(0, 0, 0, 0.1);    
    }
`

const Content = styled.div`
    font-size: 20px;
    padding: 5px;
`

const ViewTypeSwitch: FC = () => {
	const { viewType } = useContext(CalenderContext)

	return (
		<Container>
			<Content>
				<span>{viewType} </span>
				{dayjs().year()}
			</Content>
		</Container>
	)
}

export default ViewTypeSwitch
