const minions = [
	'bob',
	'kevin',
	'stuart',
	'dave',
	'jerry',
	'kevin',
	'mark',
	'tim',
	'phil',
	'carl'
];




listMinions(minions);
const cappedNames = capNames(minions);
console.log(cappedNames);

function listMinions(array) {
    array.forEach(element => {
        console.log(element);
        
    });
}

function capNames(array){

   let newArray=  array.map(element=>{
        if (element === 'kevin') {return element};
        let newName = element[0].toUpperCase() + element.substring(1);
		return newName;
        });

	return newArray;
}