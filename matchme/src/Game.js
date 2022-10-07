import React,{ useState } from 'react';
import './Game.css';

function Game(){

    const images=['https://iheartcraftythings.com/wp-content/uploads/2022/01/6-9.jpg', 'https://img.freepik.com/premium-vector/cute-flower-cartoon-character_313669-38.jpg', 'https://img.freepik.com/premium-vector/illustration-cute-cartoon-flying-hummingbird-isolated_214720-329.jpg?w=2000'];
    const [imgone, setimgone]=useState('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
    const [imgtwo, setimgtwo]=useState('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
    const [imgthree, setimgthree]=useState('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
    const [imgfour, setimgfour]=useState('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
    const [imgfive, setimgfive]=useState('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
    const [imgsix, setimgsix]=useState('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
    const [text, setText]=useState('Click the button to start playing.')
    const [fimg, setfimg]=useState('');
    const [guess, setGuess]=useState(4);
    const [score, setScore]=useState(0);
    const [click, setClick]=useState(false);
    const [one, setOne]=useState(0);
    const [two, setTwo]=useState(0);
    const [three, setThree]=useState(0);
    var gameImgs=['a','a','a','a','a','a'];
    const [oi, setoi]=useState('a');
    const [ti, setti]=useState('a');
    const [thi, setthi]=useState('a');
    const [fi, setfi]=useState('a');
    const [fii, setfii]=useState('a');
    const [si, setsi]=useState('a');
    const [clickable, setClickable]=useState('auto');

    function startNewGame(){
        setScore(0);
        setGuess(4);
        setfimg('');
        setClick(false);
        gameImgs=['a','a','a','a','a','a'];
        document.getElementById("lifetwo").style.visibility="visible";
        document.getElementById("lifeone").style.visibility="visible";
    }

    function checkGameImgs(gameImg){
        let a=false;
        for (let i=0;i<gameImg.length;i++){
            if (gameImg[i]==='a'){
                a=true;
                break;
            }
        }
        return a;
    }

    function setGameImages(){
        let matches=[-1, -1, -1];
        closeCards();
        do{
        //select random image
        let tempImages=images;
        let tempIndex=Math.floor(Math.random()*tempImages.length);
        let img=tempImages[tempIndex];
        tempImages.splice(tempIndex,1);
        //select random indexs in gameImgs
        let index1;
        do{
            index1=Math.floor(Math.random()*6);
        }while(gameImgs[index1]!=='a');
        let index2;
        do{
            index2=Math.floor(Math.random()*6);
        }while(gameImgs[index2]!=='a' || index1===index2);
        //assign imgs to indexs
        gameImgs[index1]=img;
        gameImgs[index2]=img;
        //assign matches
        matches[Math.min(index1, index2)]=Math.max(index1, index2);
    }while(checkGameImgs(gameImgs));
    //assigning to hooks
    setoi(gameImgs[0]);
    setti(gameImgs[1]);
    setthi(gameImgs[2]);
    setfi(gameImgs[3]);
    setfii(gameImgs[4]);
    setsi(gameImgs[5]);
    //assigning match hooks
    setOne(matches[0]);
    setTwo(matches[1]);
    setThree(matches[2]);

    setText('Click on cards with same image to match.')
}

    function turnCard(i){
        switch (i){
            case 0:
                setimgone(oi);
                break;
            case 1:
                setimgtwo(ti);
                break;
            case 2:
                setimgthree(thi);
                break;
            case 3:
                setimgfour(fi);
                break;
            case 4:
                setimgfive(fii);
                break;
            case 5:
                setimgsix(si);
                break;
        }
    }

    function closeCards(){
        setimgone('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
        setimgtwo('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
        setimgthree('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
        setimgfour('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
        setimgfive('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');
        setimgsix('https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/SmilyCropped.jpg?Web=1');

    }

    function imagesMatch(i){
        let match=false;
        let min=Math.min(i, fimg);
        console.log("min="+min);
        let max=Math.max(i, fimg);
        console.log("Sel max="+max);
        min=Number(min);
        switch (min){
            case 0:
                if (max===one){
                console.log("max="+one);
                match=true;}
                break;
            case 1:
                if (max===two){
                console.log("max="+two);
                match=true;}
                break;
            case 2:
                if (max===three){
                console.log("max="+three);
                match=true;}
                break;
            default:
                break;
        }
        console.log("match="+match);
        return match;
    }

    function checkClick(i){
        document.getElementById("card").onClick=false;
        turnCard(i);
        if (!click){//if first click
            setClick(true);
            setfimg(i);
        }
        else{//if second click
            setClick(false);
            console.log("first="+fimg+" simg="+i);
            setGuess(guess-1);
            if (imagesMatch(i)){//match
                setText("Congrats! That's a Match!");
                setScore(score+10);
                setTimeout(() => {
                    setGameImages();
                    document.getElementById("lifeone").style.visibility="visible";
                    setGuess(4);
                    setText('Click on cards with same image to match them.');
                }, 3000);
            }
            else{//not match
                if (guess===4){
                    setText('Oops, wrong guess.');
                    setTimeout(() => {
                        closeCards();
                        setText('Click on cards with same image to match them.');
                    }, 3000);
                }
                else if(guess===3){
                    document.getElementById("lifeone").style.visibility="hidden";
                    setText('Oops, you lost a life.');
                    setTimeout(() => {
                        closeCards();
                        setText('Click on cards with same image to match them.');
                    }, 3000);
                }
                else if (guess===2){
                    setText('Oops, one last guess left.');
                    setTimeout(() => {
                        closeCards();
                        setText('Click on cards with same image to match them.');
                    }, 3000);
                }
                else if (guess===1){
                    setText('You are out of lives.');
                    document.getElementById("lifetwo").style.visibility="hidden";
                    setTimeout(() => {
                        closeCards();
                        startNewGame();
                        document.getElementById("startBtn").style.visibility="visible";
                        setText('Click the button to start playing.')
                    }, 3000);
                }
            }
        }
        setTimeout(() => {
            document.getElementById("card").onClick=true;
        }, 3010);
    }

    return(
        <>
        <div className="gameBody">
            <div className="scoreCont">
                <h4>Score   {score}</h4>
            </div>
            <div className="livesCont">
                <img id="lifeone" width="50px" height="50px" src="https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/life-removebg-preview.png?Web=1"></img>
                <img id="lifetwo" width="50px" height="50px" src="https://coralracing-my.sharepoint.com/personal/ananya_ganga_ivycomptech_com/Documents/Pictures/life-removebg-preview.png?Web=1"></img>
            </div>
            <div className="title">
                <h2>Match Me!</h2>
            </div>
            
            <div className="cards">
                
                <img id="card" border="5px solid rgb(0,0,0)" onClick={()=>checkClick(0)} src={imgone} width="150px" height="200px"></img>
                <img id="card" onClick={()=>checkClick(1)} src={imgtwo} width="150px" height="200px"></img>
                <img id="card" onClick={()=>checkClick(2)} src={imgthree} width="150px" height="200px"></img><br></br>
                <img id="card" onClick={()=>checkClick(3)} src={imgfour} width="150px" height="200px"></img>
                <img id="card" onClick={()=>checkClick(4)} src={imgfive} width="150px" height="200px"></img>
                <img id="card" onClick={()=>checkClick(5)} src={imgsix} width="150px" height="200px"></img>
            </div>
            <div className='Startandtext'>
                <input id="startBtn" onClick={e=>{document.getElementById(e.target.id).style.visibility="hidden";startNewGame(); setGameImages();}} type={"button"} value="Start Game"></input>
                <h4>{text}</h4>
            </div>
        </div>
        </>
    )
}

export default Game;