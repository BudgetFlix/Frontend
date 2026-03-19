'use client'

import {MovieList} from "@budgetflix/ui"
import {useMovieNavigation, useMovies} from "@budgetflix/features";
import {useRouter} from "next/navigation";

export default function HomePage() {
    const {movies,loading} = useMovies()

    const router = useRouter()

    const { goToMovie } = useMovieNavigation({
        navigate: (path) => router.push(path),
    })

    if(loading)return <div>loading....</div>

    return (
        <div>
            <MovieList movies={movies} onClick={(movie) => goToMovie(movie.id)} ></MovieList>
        </div>
    )
}