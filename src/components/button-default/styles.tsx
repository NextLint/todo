import styled from 'styled-components'

export const Btn = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
    border-radius: 25px;
    position: absolute;
    bottom: 60px;
    right: 20px;
`