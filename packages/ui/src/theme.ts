import { createTokens } from 'tamagui'

export const tokens = createTokens({
    color: {
        background: '#000000',
        primary: '#E50914',
        text: '#FFFFFF',
    },

    space: {
        xs: 4,
        sm: 8,
        md: 16,
        true: 16, // 👈 EZ KELL
        lg: 24,
    },

    size: {
        sm: 32,
        md: 40,
        true: 40, // 👈 EZ KELL
        lg: 48,
    },

    radius: {
        sm: 4,
        md: 8,
        lg: 12,
    }
})

export const themes = {
    dark: {
        background: '$background',
        color: '$text',
        primary: '$primary'
    }
}