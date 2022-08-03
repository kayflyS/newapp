var friend = {
    firstName: "Ash" ,
    sayHi:
    function() {
        return this.firstName+ "says hello!";
        
    }
};
friend.sayHi()

var dog = {
    name: "whiskey",
    sleep:function(){
        return this.name + "is sleeping: zzzzz..."
    }
}

dog.sleep();

var nested = {
    number: 1,
    anotherObject: {
        anotherNumber: 2,
        whatIsThis:function(){
            return this 
        }
    }
}
nested.anotherObject.whatIsThis();