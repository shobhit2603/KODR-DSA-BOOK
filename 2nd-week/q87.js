// Find the Highest Altitude

function highestAltitude(gain) {

    let current = 0;
    let maxAltitude = 0;

    for (let i = 0; i < gain.length; i++) {

        current = current + gain[i];

        if (current > maxAltitude) {
            maxAltitude = current;
        }
    }

    return maxAltitude;
}

let gain = [-5, 1, 5, 0, -7];

console.log(highestAltitude(gain));