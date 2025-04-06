export function setCookie(name:string, value:string, minutes:number) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000)); // Convert minutes to milliseconds
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

export function clearCookie(name:string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export function getCookie(name: string) {
    let cookies: string[] = []
    if (document !== undefined && document !== null && document.cookie.length !== 0) {
        cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
    }
    return null;
}
