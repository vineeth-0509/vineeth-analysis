// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCQbg_5lBae2H8Tf11WUonuiVYyEQ7xmoA",
//   authDomain: "abiding-circle-448421-c6.firebaseapp.com",
//   projectId: "abiding-circle-448421-c6",
//   storageBucket: "abiding-circle-448421-c6.firebasestorage.app",
//   messagingSenderId: "141090333016",
//   appId: "1:141090333016:web:dd943d67b2dca64945c52d",
//   measurementId: "G-VVCXCHP2CP",
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// isSupported().then((supported) => {
//   if (supported) {
//     const analytics = getAnalytics(app);
//   }
// });

// export const storage = getStorage(app);

// //as we uploading to the firebase we keep the percentage of the file has been uploaded, we set the state and call this callback function whenever we get the new update on the percentage.on
// //ui we can upload the loading circle percentage.
// export async function uploadFile(
//   file: File,
//   setProgress?: (progress: number) => void,
// ) {
//   return new Promise((resolve, reject) => {
//     try {
//       const storageRef = ref(storage, file.name);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       //uploadTask give some callbacks, whenever the state changes it gives the snapshots of the state, these snapshots contains the information like a progress.
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress = Math.round(
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
//           ); //this gives the percentage.
//           if (setProgress) setProgress(progress);
//           switch (snapshot.state) {
//             case "paused":
//               console.log("upload is paused");
//               break;
//             case "running":
//               console.log("upload is running");
//               break;
//           }
//         },
//         (error) => {
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
//             resolve(downloadUrl as string);
//           });
//         },
//       );
//     } catch (error) {
//       console.log(error);
//       reject(error);
//     }
//   });
// }

// /*
// const firebaseConfig = {

// };

// */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQbg_5lBae2H8Tf11WUonuiVYyEQ7xmoA",
  authDomain: "abiding-circle-448421-c6.firebaseapp.com",
  projectId: "abiding-circle-448421-c6",
  storageBucket: "abiding-circle-448421-c6.firebasestorage.app",
  messagingSenderId: "141090333016",
  appId: "1:141090333016:web:dd943d67b2dca64945c52d",
  measurementId: "G-VVCXCHP2CP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
  }
});

export const storage = getStorage(app);

//as we uploading to the firebase we keep the percentage of the file has been uploaded, we set the state and call this callback function whenever we get the new update on the percentage.on
//ui we can upload the loading circle percentage.
export async function uploadFile(
  file: File,
  setProgress?: (progress: number) => void,
) {
  return new Promise((resolve, reject) => {
    try {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      //uploadTask give some callbacks, whenever the state changes it gives the snapshots of the state, these snapshots contains the information like a progress.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          ); //this gives the percentage.
          if (setProgress) setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");
              break;
            case "running":
              console.log("upload is running");
              break;
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl as string);
          });
        },
      );
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
