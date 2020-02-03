import styled from 'styled-components'

export const Header = styled.View`
    height: 60px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
    margin-left: 20px;
    margin-right: 10px;
`

export const Functions = styled.View`
    height: 100%;
    width: 75px;
    margin-right: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`