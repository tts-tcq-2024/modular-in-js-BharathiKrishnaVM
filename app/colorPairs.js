import { ColorConstants } from '../app/constants.js';

function getColorFromPairNumber(pairNumber){
	let minorSize = ColorConstants.MAJOR_COLOR_NAMES.length;
	let majorSize = ColorConstants.MINOR_COLOR_NAMES.length;
	
	if (pairNumber < 1 || pairNumber > minorSize * majorSize)
 	{
 		throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
	}
	let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new ColorPair();
	pair.majorColor = ColorConstants.MAJOR_COLOR_NAMES[majorIndex];
	pair.minorColor =  ColorConstants.MINOR_COLOR_NAMES[minorIndex];
	return pair;
}
