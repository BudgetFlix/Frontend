import { Movie ,mapMovie } from "@budgetflix/core"

export async function getMovies(): Promise<Movie[]> {
    const res = await fetch("/api/movies")

    const data = await res.json()

    return data.map(mapMovie)
}