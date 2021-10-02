import styled  from 'styled-components'

const ResetStyle = styled.div`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
`

export const Container = styled(ResetStyle)`
	display: flex;
	flex-direction: column;
`

export const CalenderContainer = styled(ResetStyle)`
	width: 322px;
	height: 322px;

	display: flex;
	flex-direction: column;
	
	border: 1px solid #a7a7a7;
	border-radius: 5px;
	
	box-sizing: border-box;
	padding: 10px;
`

export const SwitchPanel = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 6px;
`