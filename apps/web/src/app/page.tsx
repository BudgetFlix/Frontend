'use client'

import {MovieList} from "@budgetflix/ui"
import {useMovies} from "@budgetflix/features";

export default function HomePage() {
    const {movies,loading} = useMovies()

    if(loading)return <div>loading....</div>

    return (
        <div>
            <MovieList movies={movies} ></MovieList>
        </div>
    )
}