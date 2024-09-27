import {MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES} from '../app/constants'
const ColorPair = require('../app/colorPair');

function getColorFromPairNumber(pairNumber) {
    const minorSize = MAJOR_COLOR_NAMES.length;
    const majorSize = MINOR_COLOR_NAMES.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw new Error(`Argument PairNumber: ${pairNumber} is outside the allowed range`);
    }

    const zeroBasedPairNumber = pairNumber - 1;
    const majorIndex = parseInt(zeroBasedPairNumber / minorSize);
    const minorIndex = parseInt(zeroBasedPairNumber % minorSize);

    return new ColorPair(MAJOR_COLOR_NAMES[majorIndex], MINOR_COLOR_NAMES[minorIndex]);
}

function getPairNumberFromColor(pair) {
    const majorIndex = MAJOR_COLOR_NAMES.indexOf(pair.majorColor);
    const minorIndex = MINOR_COLOR_NAMES.indexOf(pair.minorColor);

    if (majorIndex === -1 || minorIndex === -1) {
        throw new Error(`Unknown Colors: ${pair.toString()}`);
    }

    return (majorIndex * MINOR_COLOR_NAMES.length) + (minorIndex + 1);
}

module.exports = {
    getColorFromPairNumber,
    getPairNumberFromColor
};
