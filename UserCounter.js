class user{
    static userCounter=0;
    constructor(s){
        this.username=s;
        user.userCounter++;
    }
}
user1=new user("johnsmith10");
console.log(user.userCounter);
user2=new user("marysue1989");
console.log(user.userCounter);
user3=new user("milan_rodrik");
console.log(user.userCounter);