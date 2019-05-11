export const getPDdata = () => {
    const months =  ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    const dte = new Date();
    const day = ('0'+dte.getDate()).slice(-2);
    const month = months[dte.getMonth()];
    const year = dte.getFullYear();

    return `${day} ${month} ${year}`

    
}