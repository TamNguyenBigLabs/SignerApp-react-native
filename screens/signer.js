import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    InputAccessoryView,
    Button,
    View,
    Linking,
} from 'react-native';

export default class SignerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: 'hello', responseLink: 'solowallet://result/'};
    }
    render() {
        const { navigate } = this.props.navigation;
        const { name } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                {this.setState({responseLink: "solowallet://result/" + this.state.message + " " + name})}
                <Text style={styles.text}>
                    Welcome {name}!
                </Text>
            
                <TextInput
                    style={{width:200, height: 40}}
                    placeholder="message"
                    onChangeText={(text) => this.setState({
                        message: text,
                        responseLink: "solowallet://result/" + text + " " + name
                    })}
                />

                <Button title={"Say " + this.state.message + " to " + name} onPress={() =>
                    Linking.canOpenURL(this.state.responseLink).then(supported => {
                        navigate("Home")
                        if (supported) {
                          Linking.openURL(this.state.responseLink);
                        } else {
                          console.log("Don't know how to open URI: " +this.state.responseLink);
                        }
                    })
                }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff2df',
    },
    text: {
        fontSize: 24,
        marginBottom: 18,
    }
});