export const dateConverter = (datestring) => {
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let convertDate = new Date( Date.parse(datestring) );
    return `${convertDate.getDate()} ${monthArr[convertDate.getMonth()]} ${convertDate.getFullYear()}`;
}