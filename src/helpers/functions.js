export const shorter = str => {
    const strArr = str.split(" ");
    const newStr = `${strArr[0]} ${strArr[1]}`;
    return newStr;
}

export const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
}