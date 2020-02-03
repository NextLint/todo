import styled from 'styled-components'

export const Container = styled.View`
    width: 100%;
    margin-bottom: 20px;
`

export const Content = styled.View`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
`

export const Label = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
    color: ${(props: any) => props.theme.SECONDARY_TEXT_COLOR};
`

export const StatusText = styled.Text`
    font-size: 18px;
    color: red;
`

export const Status = styled.View`
    margin-top: 10px;
`

export const StatusLine = styled.View`
    width: 80%;
    height: 10px;
    border-radius: 5px;
    background-color: #f9cece;
`

export const Runner = styled.View`
    height: 10px;
    border-radius: 5px;
    background-color: #ee6464;
`

export const LabelStatus = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
`