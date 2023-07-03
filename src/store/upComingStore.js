import { makeAutoObservable } from 'mobx';
import upComingFetch from '../fetch/upComingFetch';

class UpComingStore {
    films = [];

    constructor() {
        makeAutoObservable(this);
    }

    getFilms = async () => {
        const data = await upComingFetch();
        this.films = data.results
    }
}

const upComingStore = new UpComingStore();

export default upComingStore;
