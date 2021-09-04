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

const prices = [
    '$2.00','$33.33','$0.89'
]


listMinions(minions);

function listMinions(array) {
    array.forEach(element => {
        console.log(element);
        
    });
}
