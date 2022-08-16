export const shorter = str => {
    const strArr = str.split(" ");
    const newStr = `${strArr[0]} ${strArr[1]}`;
    return newStr;
}