// packages/api/src/index.ts
import { Movie } from "@budgetflix/core"

export async function getMovies(): Promise<Movie[]> {
    return [
        { id: 1, title: "Test Movie" }
    ]
}