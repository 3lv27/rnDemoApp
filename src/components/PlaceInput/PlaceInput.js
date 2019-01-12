import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native'

class PlaceInput extends Component {

  state = {
    placeName: ''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') return

    this.props.onPlaceAdded(this.state.placeName)
    this.setState({ placeName: '' })
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder='What is your fav place?'
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button title={'Add'}
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
})

export default PlaceInput;