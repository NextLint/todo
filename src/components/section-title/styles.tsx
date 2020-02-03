import styled from 'styled-components'

export const Container = styled.View`
    height: 90px;
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
`

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
`

export const Date = styled.Text`
    font-size: 17px;
    color: ${(props: any) => props.theme.SECONDARY_TEXT_COLOR};;
`