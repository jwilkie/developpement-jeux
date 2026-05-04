/**
 * Get the acronym of a string by taking the first letters of each words in 
 * it and returning them to upper case.
 * @param {string} string The string to get the acronym from.
 */
export default function acronym(string) {
    return string.split(' ').map((word) => word[0]).join('').toUpperCase();
}
