import styled from 'styled-components'

export const Drawer = styled.View`
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR};
`

export const Header = styled.View`
    height: 130px;
    width: 100%;
    background-color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
`