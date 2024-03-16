import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Movies = (props) => {
    const src = {
        uri: props.Images[0],
        height: 200
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image source={src} />
            </View>
            <View>
                <Text style={{ flex: 2, margin: 2, fontSize: 30 }}>
                    {props.Title}
                </Text>
                <Text style={{ margin: 2 }}>
                    {props.Year}
                </Text>
                <Text style={{ margin: 2 }}>
                    {props.Released}
                </Text>
                <Text style={{ margin: 2 }}>
                    {props.Actors}
                </Text>
                <Text style={{ margin: 2 }}>
                    {props.Genre}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        margin: 5,
        padding: 10
    }
})

export default Movies;
