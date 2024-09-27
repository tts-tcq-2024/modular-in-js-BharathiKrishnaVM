import { getColorFromPairNumber } from "./Utility";
import { getPairNumberFromColor } from "./Utility";
import { manualColorCombination } from "./manualColor";

function test() {
    //Color code test cases
    const testCasesForColors = [{ pairNumber: 4, expectedMajorColor: "WHITE", expectedMinorColor: "BROWN" },
    { pairNumber: 5, expectedMajorColor: "WHITE", expectedMinorColor: "SLATEGRAY" },
    { pairNumber: 23, expectedMajorColor: "RED", expectedMinorColor: "GREEN" }
    ]

    testCasesForColors.map(({ pairNumber, expectedMajorColor, expectedMinorColor }) => {
        const colorPair = getColorFromPairNumber(pairNumber);
        console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${colorPair}`);
        console.assert(testPair1.majorColor == expectedMajorColor, `Expected major color is ${expectedMajorColor} but existing color is ${colorPair.majorColor}`);
        console.assert(testPair1.minorColor == expectedMinorColor, `Expected minor color is ${expectedMinorColor} but existing color is ${colorPair.minorColor}`);
    })
   //Pair numbers of given color code
    const testCasesForPairNumber = [
        { majorColor: "YELLOW", minorColor: "GREEN", expectedPairNumber: 18 },
        { majorColor: "RED", minorColor: "BLUE", expectedPairNumber: 6 }
    ];

    testCasesForPairNumber.forEach(({ majorColor, minorColor, expectedPairNumber }) => {
        const colorPair = new ColorPair(majorColor, minorColor);
        const pairNumber = getPairNumberFromColor(colorPair);
        console.log(`[In] Colors: ${colorPair}, [Out] Pair Number: ${pairNumber}`);
        console.assert(pairNumber === expectedPairNumber, `Expected Pair Number: ${expectedPairNumber}, but existing is: ${pairNumber}`);
    });
}
//Manual color combinations
function printColorCodingManual() {
    console.log("Color Coding Manual:\n" + manualColorCombination());
}

function main() {
    runTestCases();
    printColorCodingManual();
}

main()
