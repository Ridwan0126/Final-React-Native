import React, {Component} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {FirebaseContext} from './firebase';

class AppFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
    };
  }

  componentDidMount() {
    this.getDocs();
  }

  getDocs = async () => {
    // console.log("firebase:", this.props.firebase.getAllVehicles());
    // method 1
    // const results = await this.props.firebase.getAllVehicles()
    // if (!results) Alert.alert("ERROR", "Failed to get data from Firebase 1!!")

    // results.forEach((res, idx) => {
    //   console.log("RES ID:", res.id);
    //   console.log("RES DATA:", res.data());
    // })

    // method 2
    this.props.firebase
      .getAllVehicles()
      .then(result => {
        let data = [];
        console.log('result:', result);
        result.forEach(item => {
          data.push(item.data());
          console.log('Item ID:', item.id);
          console.log('Item Data:', item.data());
        });
        this.setState({
          vehicles: data,
        });
      })
      .catch(err => {
        console.log('ERROR:', err);
        Alert.alert('ERROR', 'Failed to get data from Firebase 2!!');
      });
  };

  addDoc = () => {
    const data = {
      license: 'B ' + Math.round(Math.random() * 300) + ' B',
      time: new Date().getTime(),
      type: 'Motorcycle',
    };

    this.props.firebase
      .addVehicle(data)
      .then(() => Alert.alert('Success', 'Data saved!'))
      .catch(err => Alert.alert('Error', 'Failed save data!!'))
      .finally(() => this.getDocs());
  };

  renderVehicles = () => {
    return this.state.vehicles.map((vehicle, idx) => {
      console.log('vehicle:', vehicle);
      return (
        <View key={idx}>
          <Text>{vehicle.license}</Text>
          <Text>{vehicle.time}</Text>
          <Text>{vehicle.type}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <View>
        <Text>Ini App</Text>
        <Button title="Add Doc" onPress={this.addDoc} />
        {this.renderVehicles()}
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => <AppFirebase {...this.props} firebase={firebase} />}
      </FirebaseContext.Consumer>
    );
  }
}

export default App;
