import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, Timestamp, getDoc, doc, addDoc } from "firebase/firestore";
import swal from "sweetalert";

const firebaseConfig = {
  apiKey: "AIzaSyCTOg4Uyh7E5XeRd2suHnOinaw7hw3HrXM",
  authDomain: "parquelectro-c1a5c.firebaseapp.com",
  projectId: "parquelectro-c1a5c",
  storageBucket: "parquelectro-c1a5c.appspot.com",
  messagingSenderId: "269944250689",
  appId: "1:269944250689:web:94308822eb98ab471501c0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getAllProds(){
    const prodsCollectionRef = collection(db, "data");

    const docSnapshot = await getDocs(prodsCollectionRef);

    const dataProductos = docSnapshot.docs.map( (item) => {
        const producto = {
        ...item.data(),
        id: item.id
    }
    return producto
    });
    return dataProductos;
}
export async function getProd(id){
    const prodsCollectionRef = collection(db, "data");
    const docRef = doc(prodsCollectionRef, id);

    const docSnapshot = await getDoc(docRef);

    return {...docSnapshot.data(), id: docSnapshot.id};
}

export async function createBuyOrder(orderData){
    const buyTimestamp = Timestamp.now();
    const orderWithDate = {...orderData, date: buyTimestamp};

    const miColec = collection(db, "buyOrders");
    const orderDoc = await addDoc(miColec, orderWithDate);

    swal({title: "Gracias por su compra! Su ID es:", 
          text: orderDoc.id,
          icon: "success",
        });

}



export default db;

