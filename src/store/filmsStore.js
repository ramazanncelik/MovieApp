import { makeAutoObservable, runInAction } from 'mobx';
import nowPlayingFetch from '../fetch/nowPlayingFetch';
import popularFetch from '../fetch/popularFetch';
import topRatedFetch from '../fetch/topRatedFetch';
import upComingFetch from '../fetch/upComingFetch';
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

class FilmsStore {
    nowPlayingFilms = [];
    popularFilms = [];
    topRatedFilms = [];
    upComingFilms = [];

    constructor() {
        makeAutoObservable(this);
    }


    getFilms = async () => {
        const nowPlayingData = await nowPlayingFetch();
        const popularData = await popularFetch();
        const topRatedData = await topRatedFetch();
        const upComingData = await upComingFetch();
        runInAction(() => {
            this.nowPlayingFilms = nowPlayingData.results;
            this.popularFilms = popularData.results;
            this.topRatedFilms = topRatedData.results;
            this.upComingFilms = upComingData.results;
        })
    }
}

const filmsStore = new FilmsStore();

export default filmsStore;
