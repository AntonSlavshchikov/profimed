// Формат даты
export const formatDate = (date) => {
    var res = new Date(date);
    var dd = res.getDate();
    if (dd < 10) dd = '0' + dd;
    var mm = res.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    var yy = res.getFullYear();
    return `${dd}.${mm}.${yy}`;
}