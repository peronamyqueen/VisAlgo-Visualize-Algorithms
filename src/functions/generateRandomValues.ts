export const generateRandomValues = (n: number): number[] => {
    const newNumbers: number[] = [];
    for (let i = 0; i < n; i++) {
        newNumbers.push(Math.floor(Math.random() * 50) + 1);
    }
    console.log(newNumbers);
    return newNumbers;
};
