import styled from 'styled-components'

export const Container = styled.View`
    width: 90%;
    border-radius: 10px;
    padding: 10px;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR};
    margin-bottom: 15px;
`

export const InputContainer = styled.View`
    width: 100%;
    padding-top: 18px;
`

export const Input = styled.TextInput`
    font-size: 17px;
    color: ${(props: any) => props.theme.SECONDARY_TEXT_COLOR};
    width: 100%;
    border-bottom-width: 2px;
    border-bottom-color: ${(props: any) => props.theme.SECONDARY_TEXT_COLOR};
` 