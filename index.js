// firebase.js

// Import Firebase SDK
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh9bbbl2US37adk_SYsrUIy0A7_7USwV4",
  authDomain: "cafemironapp.firebaseapp.com",
  databaseURL: "https://cafemironapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cafemironapp",
  storageBucket: "cafemironapp.appspot.com",
  messagingSenderId: "711386017052",
  appId: "1:711386017052:web:3b4fea68f38dd797385ed9",
  measurementId: "G-2M0LXYWPRX"
};
   


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase for use in other parts of your application
export default firebase;
// Reference to the Firebase Realtime Database node containing your data
const ordersRef = database.ref("orders");

// Function to display data in your HTML
function displayOrders(data) {
  const itemsContainer = document.querySelector(".items");

  // Clear existing items
  itemsContainer.innerHTML = "";

  // Iterate through the retrieved data
  data.forEach((order) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item1");

    const name = document.createElement("h3");
    name.classList.add("t-op-nextlvl");
    name.textContent = order.title; // Replace with your data field name for the name/title

    const address = document.createElement("h3");
    address.classList.add("t-op-nextlvl");
    address.innerHTML = order.address.replace(/\n/g, "<br>"); // Replace with your data field name for the address

    const orderText = document.createElement("h3");
    orderText.classList.add("t-op-nextlvl");
    orderText.textContent = `${order.quantity} * ${order.product}`; // Replace with your data field names for quantity and product

    const totalPrice = document.createElement("h3");
    totalPrice.classList.add("t-op-nextlvl");
    totalPrice.textContent = `LKR ${order.price}`; // Replace with your data field name for price

    const status = document.createElement("h3");
    status.classList.add("t-op-nextlvl", "label-tag");
    status.textContent = order.status; // Replace with your data field name for status

    itemDiv.appendChild(name);
    itemDiv.appendChild(address);
    itemDiv.appendChild(orderText);
    itemDiv.appendChild(totalPrice);
    itemDiv.appendChild(status);

    itemsContainer.appendChild(itemDiv);
  });
}

// Fetch data from Firebase and update the HTML when the data changes
ordersRef.on("value", (snapshot) => {
  const ordersData = snapshot.val();
  if (ordersData) {
    const ordersArray = Object.values(ordersData);
    displayOrders(ordersArray);
  }
});
