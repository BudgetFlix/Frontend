'use client'

import { useEffect, useState } from "react"
import { getStreamUrl } from "@budgetflix/api"

export function useStream(movieId: number) {
    const [url, setUrl] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setLoading(true)

        getStreamUrl(movieId)
            .then(setUrl)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [movieId])

    return { url, loading, error }
}