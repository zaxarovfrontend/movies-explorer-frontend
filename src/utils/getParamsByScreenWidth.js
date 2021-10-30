export function getParamsByScreenWidth() {
    const innerWidth = window.innerWidth;

    if (innerWidth >= 1280) {
        return {
            moviesStartCount: 12,
            addMoviesCount: 3
        };
    } else if (innerWidth >= 768 && innerWidth < 1280) {
        return {
            moviesStartCount: 8,
            addMoviesCount: 2
        };
    } else {
       return {
            moviesStartCount: 5,
            addMoviesCount: 1
        };
    }
}
