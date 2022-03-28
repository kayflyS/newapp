var fullName = 'john doe';
var obj = {
    fullName:'colin ihrig',
    prop: {
        fullName:'aurelio de rosa',
        getFullName: function() {
            return this.fullName
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName.fullName;
console.log(test());