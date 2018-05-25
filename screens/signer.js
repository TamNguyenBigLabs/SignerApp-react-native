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
        this.state = {responseMessage: 'hello', responseLink: 'solowallet://result/'};
    }
    render() {
        const { navigate } = this.props.navigation;
        const { caller, inMessage } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome {inMessage}!
                </Text>
            
                <TextInput
                    style={{width:200, height: 40}}
                    placeholder="message"
                    onChangeText={(text) => this.setState({
                        responseMessage: text,
                        responseLink: "solowallet://result/" + caller + "/" + text + " " + inMessage
                    })}
                />

                <Button title={"Say " + this.state.responseMessage + " to " + inMessage} onPress={() => {
                    this.setState({responseLink: "solowallet://result/" + caller + "/" + this.state.responseMessage + " " + inMessage});
                    Linking.canOpenURL(this.state.responseLink).then(supported => {
                        navigate("Home")
                        if (supported) {
                          Linking.openURL(this.state.responseLink);
                        } else {
                          console.log("Don't know how to open URI: " +this.state.responseLink);
                        }
                    });}
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