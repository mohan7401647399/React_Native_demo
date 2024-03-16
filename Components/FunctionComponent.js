import { useState } from 'react';
import { Button, Text, View } from 'react-native';

const FunctionComponent = (props) => {
    const [text, setText] = useState("use_state");

    const handleClick = () => {
        setText("tutorial")
    }

    return (
        <View>
            <Text>FunctionComponent {props.name} {text}</Text>
            <Button title='click' onPress={handleClick} />
        </View>
    )
}

export default FunctionComponent;
