// const sender = 'Matt';

// function sendTo(from, to) {
//     console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, 'Sarah'); // *
// sendTo(null); // **


const sender = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // ***From CC to Max
sendTo('Ben', 'Jay'); // **** From Jay to Ben