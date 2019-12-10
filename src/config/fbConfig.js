import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDAq1klshvtgdjt33ecKL9gFPgKEczhC-Q",
  authDomain: "react-redux-project-c710f.firebaseapp.com",
  databaseURL: "https://react-redux-project-c710f.firebaseio.com",
  projectId: "react-redux-project-c710f",
  storageBucket: "react-redux-project-c710f.appspot.com",
  messagingSenderId: "737259164278",
  appId: "1:737259164278:web:a6d5dcca1daf8063fe4557",
  measurementId: "G-CZNLT6QZQS"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
