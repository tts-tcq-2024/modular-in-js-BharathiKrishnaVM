import { getColorFromPairNumber } from "./utility";
import {MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES} from '../app/constants'

function manualColorCombination() {
    const minorSize = MAJOR_COLOR_NAMES.length;
    const majorSize = MINOR_COLOR_NAMES.length;
    let manual = '';

    for (let i = 1; i <= minorSize * majorSize; i++) {
        const colorPair = getColorFromPairNumber(i);
        manual += `Pair Number: ${i}, Colors: ${colorPair.toString()}\n`;
    }

    return manual;
}

module.exports = manualColorCombination;
