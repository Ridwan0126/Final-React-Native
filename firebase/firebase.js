import firestore from '@react-native-firebase/firestore';

class Firebase {
  constructor() {
    this.dbVehicles = firestore().collection('users');
  }

  getAllVehicles = () => this.dbVehicles.get();

  addVehicle = vehicle => this.dbVehicles.add(vehicle);
}

export default Firebase;
