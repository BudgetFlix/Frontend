'use client'

import {TamaguiProvider} from 'tamagui'
import {tamaguiConfig} from '@budgetflix/ui/tamagui.config'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <TamaguiProvider config={tamaguiConfig}>
            {children}
        </TamaguiProvider>
        </body>
        </html>
    )
}