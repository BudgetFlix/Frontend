'use client'

import { Button, YStack, Text } from '@budgetflix/ui'

export default function Home() {
  return (
      <YStack f={1} jc="center" ai="center">
        <Text>BudgetFlix</Text>
        <Button>Play</Button>
      </YStack>
  )
}