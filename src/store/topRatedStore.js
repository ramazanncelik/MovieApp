import { makeAutoObservable } from 'mobx';
import topRatedFetch from '../fetch/topRatedFetch';

class TopRatedStore {
    films = [];

    constructor() {
        makeAutoObservable(this);
    }

    getFilms = async () => {
        const data = await topRatedFetch();
        this.films = data.results
    }
}

const topRatedStore = new TopRatedStore();

export default topRatedStore;
