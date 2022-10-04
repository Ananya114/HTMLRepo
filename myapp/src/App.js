//import logo from './logo.svg';
import './App.css';

function checkNum(){
  let num=document.getElementById("num").value;
  console.log(num);
  let orgNum=num;
  let revNum=0;
  while(num>0){
    revNum=(revNum*10)+(num%10);
    num=num/10;
  }
    if(orgNum===revNum)
  document.getElementById('textBlk').innerHTML="Palindrome";
  else
  document.getElementById('textBlk').innerHTML="Not a Palindrome";
}

function App() {
  return (
    <>
    <div>
      <input type={"text"} id={"num"}></input>
      {/* <input type="text" id="num" name='num'></input> */}
      <input type="button" value="Check" onClick={checkNum()}></input>
      <h3 id='textBlk'>Welcome</h3>
    </div>
    </>
  );
}

export default App;
