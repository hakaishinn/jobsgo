export const formatDate = (dateStr, type = 'dd-mm-yyyy') => {
    const today = new Date(dateStr);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    switch (type) {
        case 'dd-mm-yyyy':
            return dd + '-' + mm + '-' + yyyy;
        case 'yyyy-mm-dd':
            return yyyy + '-' + mm + '-' + dd;
        default:
            break;
    }
};
