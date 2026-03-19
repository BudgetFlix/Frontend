'use client'

import { useEffect, useState } from "react"
import { getMovies } from "@budgetflix/api"
import { Movie } from "@budgetflix/core"

export function useMovies() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getMovies()
            .then(setMovies)
            .finally(() => setLoading(false))
    }, [])

    return { movies, loading }
}