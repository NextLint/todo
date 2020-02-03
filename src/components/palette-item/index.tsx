import React from 'react'
import { Button } from './styles'

interface IThemeProps {
    id: string,
    col: string,
    chooseTheme(id: string): void
}

const Theme = (props: IThemeProps) => {
    
    const handleButtonClick = () => { console.log('was choosen', props.id);props.chooseTheme(props.id) }
    
    return (
        <Button col={props.col} onPress={handleButtonClick} />
    )
}

export default Theme