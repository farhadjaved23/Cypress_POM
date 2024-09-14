    export function getRandfrom1To100() 
    {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }

    export function getRandNumber(min, max)
    {
        return Math.floor(Math.random() * max) + min;
    } 

    export function getDate()
    {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return day
    }
    

