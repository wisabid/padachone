export const getPDdata = () => {
    const months =  ["Jan","Feb","Mar","Apr","May","Jun","Jul",
    "Aug","Sep","Oct","Nov","Dec"];

    const dte = new Date();
    const day = ('0'+dte.getDate()).slice(-2);
    const month = months[dte.getMonth()];
    const year = dte.getFullYear();

    return `${day} ${month} ${year}`

    
}