import { Movie } from "@budgetflix/core"

export function mapMovie(api: any): Movie {
    return {
        id: api.id,
        title: api.title,
    }
}