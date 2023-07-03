import { makeAutoObservable } from 'mobx';
import nowPlayingFetch from '../fetch/nowPlayingFetch';

class NowPlayingStore {
    films = [];

    constructor() {
        makeAutoObservable(this);
    }

    getFilms = async () => {
        const data = await nowPlayingFetch();
        this.films = data.results
    }
}

const nowPlayingStore = new NowPlayingStore();

export default nowPlayingStore;
