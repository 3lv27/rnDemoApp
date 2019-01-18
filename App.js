/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'


class App extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
    
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Places</Text>
        <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 26,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
