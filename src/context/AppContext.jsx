import React, { useState, createContext, useContext, useEffect, useMemo } from 'react'
import { useLocalObservable } from 'mobx-react';
import nowPlayingStore from '../store/nowPlayingStore';
import popularStore from '../store/popularStore';
import topRatedStore from '../store/topRatedStore';
import upComingStore from '../store/upComingStore';

const AppContext = createContext({});

const AppProvider = ({ children }) => {

    const [nowPlayingFilms, setNowPlayingFilms] = useState(null);
    const nowPlayingFilmsStore = useLocalObservable(() => nowPlayingStore);

    const [popularFilms, setPopularFilms] = useState(null);
    const popularFilmsStore = useLocalObservable(() => popularStore);

    const [topRatedFilms, setTopRatedFilms] = useState(null);
    const topRatedFilmsStore = useLocalObservable(() => topRatedStore);

    const [upComingFilms, setUpComingFilms] = useState(null);
    const upComingFilmsStore = useLocalObservable(() => upComingStore);

    const getFilms = async () => {
        try {
            await nowPlayingFilmsStore.getFilms();
            setNowPlayingFilms(nowPlayingFilmsStore.films);

            await popularFilmsStore.getFilms();
            setPopularFilms(popularFilmsStore.films);

            await topRatedFilmsStore.getFilms();
            setTopRatedFilms(topRatedFilmsStore.films);

            await upComingFilmsStore.getFilms();
            setUpComingFilms(upComingFilmsStore.films);
        } catch (e) {
            console.log(e)
        }
    }

    const data = useMemo(
        () => ({
            nowPlayingFilms,
            popularFilms,
            topRatedFilms,
            upComingFilms
        }),
        [nowPlayingFilms, popularFilms, topRatedFilms, upComingFilms]
    );

    useEffect(() => {
        getFilms();
    }, []);

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
}

export { AppContext, AppProvider, useAppContext };