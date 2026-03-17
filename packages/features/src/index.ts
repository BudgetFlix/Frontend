// packages/features/src/index.ts
import { useEffect, useState } from "react"
import { getMovies } from "@budgetflix/api"
import { Movie } from "@budgetflix/core"

export function useMovies() {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getMovies().then(setMovies)
    }, [])

    return { movies }
}