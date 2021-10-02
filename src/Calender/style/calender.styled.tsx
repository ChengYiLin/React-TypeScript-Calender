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
	width: 320px;
	max-height: 360px;

	display: flex;
	flex-direction: column;
	
	border: 1px solid #a7a7a7;
	border-radius: 5px;
	
	box-sizing: border-box;
	padding: 10px;
`

export const SwitchPannel = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 5px;
`