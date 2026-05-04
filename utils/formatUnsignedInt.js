/**
 * Format an unsigned int to a specific size by adding zeros in front of it.
 * @param {number} number The unsigned int to format.
 * @param {number} size The size at which we want to format the unsigned int.
 * @returns A formatted string of the number with, if necessary, added zeros in front of it to reach the specified size.
 */
export default function formatUnsignedInt(number, size) {
    return ('0'.repeat(size - 1) + (number)).slice(-size);
}