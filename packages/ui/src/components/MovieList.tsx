import {XStack} from "tamagui";
import {MovieCard} from "@budgetflix/ui";
import {Movie} from "@budgetflix/core";

type Props = {
    movies: Movie[]
    onClick?: () => void
}

export function MovieList({movies, onClick}: Props) {
    return (
        <XStack>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onPress={onClick}
                />
            ))}
        </XStack>
    )
}