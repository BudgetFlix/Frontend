'use client'

import { Button } from 'tamagui'

type Props = {
    label: string
    onPress?: () => void
}
export function AppButton({ label, onPress }: Props) {
    return (
        <Button onPress={onPress}>
            {label}
        </Button>
    )
}