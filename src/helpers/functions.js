export const shorter = str => {
    const strArr = str.split(" ");
    const newStr = `${strArr[0]} ${strArr[1]}`;
    return newStr;
}

export const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
}

export const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if(index === -1){
        return false;
    }else {
        return state.selectedItems[index].quantity;
    }
}