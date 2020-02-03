import styled from 'styled-components'

export const Button = styled.TouchableOpacity`
    height: 100%;
    width: 100%;
    border-radius: 35px;
    background-color: ${(props: any) => props.col}
`