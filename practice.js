/// class repo link: https://git.generalassemb.ly/SEIR-809/callback-array-methods-lab///


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


const capitalizedMinions = capNames(minions);
//// THIS IS THE SAME:   minions.map(capNames);
//// THIS IS ALSO THE SAME: 
/*  let newArray=  minions.map(element=>{
         if (element === 'kevin') {return element};
         let newName = element[0].toUpperCase() + element.substring(1);
		 return newName;
    	});
/// return newArray;
// } */
console.log(capitalizedMinions);

console.log(capitalizedMinions.every(isCaptialized) ? `We're capped!` : 'KEVIINNN!');

function listMinions(array) {
    array.forEach(element => {
    console.log((element));
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

function isCaptialized (minion) {return minion[0] === minion[0].toUpperCase()};


const actuallyCapitalizedMinions = capitalizedMinions.filter(isCaptialized);
console.log(capitalizedMinions);
console.log(actuallyCapitalizedMinions);