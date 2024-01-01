export default class WatchlistScreen{
    tiles = {
        filmInWatchlist: (link: string) => `//a[@data-testid="film-tile-link" and @href="${link}"]`
    }
}