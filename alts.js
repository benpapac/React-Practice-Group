
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

/// CAP first kevin and REMOVE kevin/// --- Joy's version 

function KevIndex() {
   const p =
    capitalizedMinions.findIndex(
    (minion)=>
    {
     return  minion === uncapitalizedMinion
    }
);
return p;
}
function capKevin(capitalizedMins)
{
capitalizedMins.splice(KevIndex(),1, uncapitalizedMinion[0].toUpperCase() + uncapitalizedMinion.slice(1))
capitalizedMins.splice(KevIndex(), 1);
}
