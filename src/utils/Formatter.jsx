export default class Formatter {
    
    // Method to format a Date object to a string (e.g., "YYYY-MM-DD HH:MM:SS")
    static formatDateTime(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    }

    static formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${day}-${month}-${year}`;
    }

    // Method to format a number to two decimal places only if necessary
    static formatNumberToTwoDecimalPlaces(number) {
        if (Number.isInteger(number)) {
            return number.toString();
        }
        return parseFloat(number.toString()).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    }
}
