import React from 'react'
import { Button, Text, View } from 'react-native'

export default class ClassComponenet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "R Mohan"
        }
    }

    handleChange() {
        this.setState({
            name: "Rockabye"
        })
    }

    render() {
        return <View>
            <Text>ClassComponent {this.state.name} {this.props.name} </Text>
            <Button onPress={this.handleChange.bind(this)} title='change_name' />
        </View>
    }
}
