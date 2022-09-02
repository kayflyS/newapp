var instructor = {
    firstName:'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displaylocation:function() {
            return this.displaylocation.location;  
        },
        data: {
        }
    }
}
instructor.info.displaylocation()                    location: "Oakland"
      