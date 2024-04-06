export function CapitalizeString(string){
    const firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.slice(1);
}