/**
 * undefined または 空文字のフィールドを削除する
 * @param obj
 */
export const removeEmptyFields = (obj: any) => {
    const copy = Object.assign(obj);
    Object.keys(copy).forEach(key => (copy[key] === undefined || copy[key] === '') && delete copy[key]);
    return copy;
}
