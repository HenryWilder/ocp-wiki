/**
 * Replaces the text content of the input element with a random number having the number of digits consistent with the element content; including leading zeros.
 * @param element The HTML element on which to perform the effect.
 */
const jumble = (element: HTMLElement): void => {
    if (element.textContent === null) {
        console.warn("Function \"jumble(HTMLElement)\" has no effect if the element has no text content.");
        return;
    }
    const digits = element.textContent.length;
    const maxValue = Math.pow(10, digits) - 1;
    let newName = `${Math.floor(Math.random()*maxValue)}`;
    while (newName.length < digits) newName = "0" + newName; // Pad with 0s
    element.innerHTML = newName;
}

/**
 * Replaces the text content of the input element with random text of the same length as the original
 * @param element The HTML element on which to perform the effect.
 */
const xaoc = (element: HTMLElement): void => {
    if (element.textContent === null) {
        console.warn("Function \"xaoc(HTMLElement)\" has no effect if the element has no text content.");
        return;
    }
    const length = element.textContent.length;
    let newName = Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    element.innerHTML = newName;
}

/**
 * Adds randomly-positioned spaces and repeats some characters of provided string
 * @param str The string to apply garbling to
 * @returns The garbled string
 */
const garbleString = (str: string): string => {
    const pick = Math.floor(Math.random() * str.length);
    str = str.slice(0, pick) + " " + str.slice(pick + 1);

    const pick1 = Math.floor(Math.random() * str.length);
    const count = Math.floor(Math.random() * 7);
    str = str.slice(0, pick1) + " " + str.charAt(pick1-1).repeat(count) + str.slice(pick1 + 1);

    const pick2 = Math.floor(Math.random() * str.length);
    const count2 = Math.floor(Math.random() * 7);
    str = str.slice(0, pick2) + " " + str.charAt(pick2+1).repeat(count2) + str.slice(pick2 + 1);

    return str;
}

/**
 * Adds randomly-positioned spaces and repeats some characters of all "garble"-class elements, using the element's title attribute as a starting point
 * @param element The HTML element on which to perform the effect.
 */
const garble = (element: HTMLElement): void => {
    if (element.title.length === 0) {
        console.warn("Function \"garble(HTMLElement)\" has no effect if the element has no title.");
        return;
    }
    element.innerHTML = garbleString(element.title);
}

/**
 * Performs same effect as "garble" but without hovering around a predetermined string.
 * Note that this has the effect of gradually growing the string if used repeatedly.
 * @param element The HTML element on which to perform the effect.
 * @param [maxSize=256] The maximum length the text can become before cutting off the end. Set to -1 for no limit. Defaults to 256 characters.
 *                (This is dangerous, as it can continue lengthening the string until the client runs out of RAM)
 */
const degrade = (element: HTMLElement, maxSize: number = 256): void => {
    if (element.title.length === 0) {
        console.warn("Function \"garble(HTMLElement)\" has no effect if the element has no title.");
        return;
    }
    const newStr: string = garbleString(element.title);
    element.innerHTML = maxSize === -1
        ? newStr
        : newStr.substring(0, maxSize);
}

// Initializes a repeating interval to coninuously jumble/xaoc/garble all relevant elements in the page.
export const continuousJumble = () => {
    setInterval(() => { document.querySelectorAll<HTMLElement>(".jumble").forEach((element) => { jumble(element); }) },  50);
    setInterval(() => { document.querySelectorAll<HTMLElement>(".xaoc")  .forEach((element) => { xaoc  (element); }) },  50);
    setInterval(() => { document.querySelectorAll<HTMLElement>(".garble").forEach((element) => { garble(element); }) }, 130);
}
