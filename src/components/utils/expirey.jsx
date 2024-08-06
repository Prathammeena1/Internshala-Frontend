export const isExpired = (expiryDateStr) => {
    // Parse the given expiry date string into a Date object
    const expiryDate = new Date(expiryDateStr);
    
    // Get the current date
    const currentDate = new Date();
    
    // Check if the current date is past the expiry date
    return currentDate > expiryDate;
};