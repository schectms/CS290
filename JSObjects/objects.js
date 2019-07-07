function deepEqual(a,b)
{
//test for whether you are dealing with a real object
if( (typeof a == 'object' && a != null) &&
(typeof b == 'object' && b != null) )
{
//ensure that both objects have the same number of properties 
if (Object.keys(a).length != Object.keys(b).length) return false;
//loop over one of the object’s properties to compare them
for( var key in a)
{
/*
make sure the other actually has a property by that name.
If they have the same number of properties and all properties
in one also exist in the other, they have the same set of property names.
*/
if (!Object.keys(b).includes(key) || !deepEqual(a[key], b[key])) return false;
}
return true;
}
//if not, immediately return the result of applying ===
else
{
return a === b;
}
}

obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
