import styled from 'styled-components'

export const Button = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Label = styled.Text`
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    color: ${(props: any) => props.theme.SECONDARY_TEXT_COLOR}
`