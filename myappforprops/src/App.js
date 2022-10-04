
import './App.css';
import React from 'react';


// const Student=(props)=>{
//   return(
//     <div className="App">
//     <h2>Name: {props.firstname} {props.lastname}</h2>
//     <h2>ID: {props.id}</h2>
//     <h2>Degree: {props.degree}</h2>
//     <h2>Course: {props.course}</h2>
//     </div>
//   )
// }

// class Student extends React.Component{
//   render(){
//     return(
//       <>
//     <h2>Name: Ananya G</h2>
//     <h2>ID: 1024</h2>
//     <h2>Degree: BTech</h2>
//     <h2>Course: ECM</h2>
//     </>
//     )
    
//   }
// }

const Student=({firstname, lastname, degree, course, id})=>{
  return(
    <>
    <h2>Name: {firstname} {lastname}</h2>
    <h2>ID: {id}</h2>
    <h2>Degree: {degree}</h2>
    <h2>Course: {course}</h2>
    </>
  )
}

function App() {
  return (
    // <div>
    //   <Student firstname="Ananya" lastname="G" degree="Btech" course="ECM" id="1022"></Student>
    // </div>
    // <div className='App'>
    //   <Student/>
    // </div>
    <div>
      <Student firstname={"Ananya"} lastname={"G"} degree={"BTech"} course={"ECM"} id={"1025"}></Student>
    </div>
  );
}

export default App;
