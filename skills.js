function calculateNumbers(var1, var2){
    // Input validation
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('Both inputs must be numbers');
    }

    // Perform calculations
    const results = {
        sum: var1 + var2,
        difference: var1 - var2,
        product: var1 * var2,
        quotient: var2 !== 0 ? var1 / var2 : 'Cannot divide by zero'
    };

    return results;
}