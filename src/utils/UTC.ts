
export function getUTC() {
        let currentUtcDate = new Date();

        
        let year = currentUtcDate.getUTCFullYear(); 
        let month = currentUtcDate.getUTCMonth() + 1; 
        let day = currentUtcDate.getUTCDate(); 

        
        let formattedMonth = month < 10 ? "0" + month : month;
        let formattedDay = day < 10 ? "0" + day : day;

        
        let formattedUtcDate = year +""+ formattedMonth  +""+ formattedDay;
        return formattedUtcDate
}