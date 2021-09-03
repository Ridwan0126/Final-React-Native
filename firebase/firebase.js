import firestore from '@react-native-firebase/firestore';

class FIREBASE {
  constructor() {
    this.dbVehicles = firestore().collection('users');
  }

  getAllVehicles = () => this.dbVehicles.get();

  addVehicle = vehicle => this.dbVehicles.add(vehicle);
}

export default FIREBASE;
