'use client'

import { Text, YStack } from "tamagui"
import { Movie } from "@budgetflix/core"
import {AppButton} from "./Button";

type Props = {
    movie: Movie
    onPress?: () => void

}

export function MovieCard({ movie,onPress }: Props) {
    return (

        <YStack
            width={160}
            space="$2"
            cursor="pointer"
        >
            <Text fontWeight="600" numberOfLines={1}>
                {movie.title}
            </Text>
            <AppButton label={"play"} onPress={onPress}></AppButton>

        </YStack>
    )
}