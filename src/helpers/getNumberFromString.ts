export const getNumberFromString = (str: string): number => {
    const regNums = /\d+/;
    const number = Number(regNums.exec(str));

    return number;
};
