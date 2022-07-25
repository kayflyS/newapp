var instructor = {
    firstName: 'Tim',
    info: {
        catOwner:true
        "_boatOwner": true,
        get boatOwner() {
            return this._boatOwner;
        },
        set boatOwner(value) {
            this._boatOwner = value;
        },
    },
    dispayInfo:function() {
        console.log("Cat owner?" + catOwner);     
    }
}
instructor.displayInfo()//?
