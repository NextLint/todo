import styled from 'styled-components'

export const Container = styled.View`
    height: 60px;
    width: 100%;
    background-color: ${(props: any) => props.theme.PRIMARY_BACKGROUND_COLOR};
`

export const Content = styled.View`
    height: 60px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    background-color: ${(props: any) => props.theme.PRIMARY_BACKGROUND_COLOR};
`

export const Button = styled.TouchableOpacity`
    height: 44px;
    width: 44px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
    margin-left: 10px;
    margin-right: 10px;
`