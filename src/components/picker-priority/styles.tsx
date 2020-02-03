import styled from 'styled-components'

export const Container = styled.View`
    width: 90%;
    border-radius: 10px;
    padding: 10px;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR};
    margin-bottom: 15px;
`

export const Title = styled.Text`
    font-size: 17px;
    letter-spacing: 1px;
    color: ${(props: any) => props.theme.SECONDARY_TEXT_COLOR};
`