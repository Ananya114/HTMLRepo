function displayDayTime(){
    days=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    today=new Date();
    if (today.getHours()>12){
        hours=today.getHours()-12;
        s="PM";
    }
    else{
        hours=today.getHours();
        s="AM";
    }
    console.log("Today is: "+days[today.getDay()]+". Current time is: "+hours+":"+today.getMinutes()+":"+today.getSeconds()+" "+s);
}
displayDayTime();