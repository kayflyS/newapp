var fullName = 'andy muller';
var obj = {
    fullName:'colin fuller',
    prop: {
        fullName:'aurelio de rosa mendes',
        getFullName: function() {
            return this.fullName
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName.fullName;
console.log(test());