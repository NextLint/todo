import styled from 'styled-components'

export const Container = styled.View`
    padding: 20px;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
`

export const BackArea = styled.TouchableWithoutFeedback`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex: 1;
`