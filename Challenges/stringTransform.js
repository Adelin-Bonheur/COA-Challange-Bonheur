function transformString(inputStr) {
    const length = inputStr.length;
    let result = '';

    // Check if the length is divisible by 3, 5, or both
    const divisibleBy3 = length % 3 === 0;
    const divisibleBy5 = length % 5 === 0;

    // Apply transformations based on divisibility
    if (divisibleBy3 && divisibleBy5) {
        // Reverse the entire string first
        inputStr = inputStr.split('').reverse().join('');
        // Then replace each character with its ASCII code
        result = inputStr.split('').map(char => char.charCodeAt(0)).join('');
    } else {
        if (divisibleBy3) {
            // Reverse the string
            result = inputStr.split('').reverse().join('');
        }

        if (divisibleBy5) {
            // Replace each character with its ASCII code
            result = inputStr.split('').map(char => char.charCodeAt(0)).join(' ');
        }
    }

    return result;
}

// Test cases
console.log(transformString("Hamburger"));  // Output: "regrubmaH"
console.log(transformString("Pizza"));      // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"
