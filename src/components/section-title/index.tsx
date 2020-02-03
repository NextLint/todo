import React from 'react';
import {
    Container,
    Title,
    Date
} from './styles';
import { withTheme } from 'styled-components'

interface ISectionTitleProps {
    title: string,
    getDate(): string,
    hasDate?: boolean,
}

const SectionTitle = (props: ISectionTitleProps) => {
    return (
        <Container>
            <Title>{props.title}</Title>
            {props.hasDate && <Date>{props.getDate()}</Date>}
        </Container>
    );
}

export default withTheme(SectionTitle)