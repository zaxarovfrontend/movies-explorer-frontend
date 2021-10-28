export function getMoviesStartCount() {
    const innerWidth = window.innerWidth;

    if (innerWidth >= 1280) {
        return 12;
    } else if (innerWidth >= 768 && innerWidth < 1280) {
        return 8;
    } else {
       return 5;
    }
}
