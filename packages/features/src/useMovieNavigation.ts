import {Navigate} from "@budgetflix/core";

type Props = {
    navigate: Navigate
}

export function useMovieNavigation({ navigate }: Props) {
    function goToMovie(id: number) {
        navigate(`/movie/${id}`)
    }

    return { goToMovie }
}