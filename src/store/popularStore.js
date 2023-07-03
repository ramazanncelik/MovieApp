import { makeAutoObservable } from 'mobx';
import popularFetch from '../fetch/popularFetch';

class PopularStore {
    films = [];

    constructor() {
        makeAutoObservable(this);
    }

    getFilms = async () => {
        const data = await popularFetch();
        this.films = data.results
    }
}

const popularStore = new PopularStore();

export default popularStore;
