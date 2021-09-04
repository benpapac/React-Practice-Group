
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


///MAP///
// to make the .map change without creating a callable function: 
const capitalizedMinions =
minions.map(element =>
    {
if(element === 'kevin')
{return element}
return element[0].toUpperCase() + element.substring(1)
    }
    );

/// NOTICE the SLICE method -- it has more utility than .substring()
    let capatalizedMinions = minions.map((element)=> {
    if (element === 'kevin'){
      return element;
    } 
        return element.charAt(0).toUpperCase() + element.slice(1);
    
});
console.log(capatalizedMinions);



