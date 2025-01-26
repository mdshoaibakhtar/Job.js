export function formatString(input:string) {
    return input
        .split('_')
        .map((word, index) => {
            return index === 0
                ? word.charAt(0).toLowerCase() + word.slice(1)
                : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
}