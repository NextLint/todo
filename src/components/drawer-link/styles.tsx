import styled from 'styled-components'

export const Link = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR_LIGHT};
    border-radius: 5px;
`

export const Title = styled.Text`
    margin-left: 15px;
    font-size: 20px;
    color: ${(props: any) => props.theme.SECONDARY_TEXT_COLOR};
`