/**
 * Capitalize the string in parameter.
 * @param {string} string String to capitalize.
 * @returns The capitalized version of the string in parameter.
 */
export default function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}