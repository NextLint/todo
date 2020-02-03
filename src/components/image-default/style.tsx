import styled from 'styled-components'

export const Container = styled.TouchableOpacity`
    height: 110px;
    width: 110px;
    margin: 10px;
    margin-top: 0px;
    border-color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
    position: relative;   
`

export const Photo = styled.Image`
    height: 100%;
    width: 100%;
`

export const Cancel = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    background-color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
    border-radius: 20px;
    position: absolute;
    top: -15px;
    right: -15px;
    align-items: center;
    justify-content: center;
`