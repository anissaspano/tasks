/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let finalArray = [];
    numbers.length < 1;
    {
        finalArray = [];
    }
    numbers.length < 2;
    {
        finalArray = [...numbers, ...numbers];
    }
    numbers.length > 2;
    {
        finalArray = [numbers[0], numbers[length - 1]];
    }
    return finalArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const str = numbers.map((number: string): number => parseInt(number));
    return str;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeSymbol = amounts.filter(
        (amount: string[0]): boolean => amount[0] == "$"
    );
    const dollarAmounts = removeSymbol.map((amount: string): number =>
        parseInt(amount)
    );
    return dollarAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages.map((message: string): string =>
        message[message.length - 1] == "!" ? message.toUpperCase() : message
    );
    const removeQuestions = messages.filter(
        (message: string): boolean => message[message.length - 1] == "?"
    );
    return removeQuestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const onlyShortWords = words
        .flat(Infinity)
        .filter((currentItem) => currentItem.length < 4);
    return onlyShortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let RGB = true;
    colors.length < 1;
    {
        RGB = true;
    }
    colors.length > 1;
    {
        RGB = colors.every(
            (colors: string): boolean =>
                colors == "red" || colors == "blue" || colors == "green"
        );
    }
    return RGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const theNums = addends.join("+");
    let finalNums = sum + "=" + theNums;
    addends.length < 1;
    {
        finalNums = "0=0";
    }
    return finalNums;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const anyNegative = values.some((value: number): boolean => value < 0);
    let finalArray: number[] = [];
    anyNegative;
    {
        const firstNegIndex = values.findIndex(
            (value: number): boolean => value < 0
        );
        const sum = values
            .slice(0, firstNegIndex - 1)
            .reduce((a, b) => a + b, 0);
        finalArray = values.splice(firstNegIndex, 0, sum);
    }
    !anyNegative;
    {
        const sum = values.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        finalArray = [...values, sum];
    }
    return finalArray;
}
