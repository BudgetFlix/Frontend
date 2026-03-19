'use client'

import { useParams } from "next/navigation"
import { useStream } from "@budgetflix/features"
import { VideoPlayer } from "@budgetflix/ui"

export default function MoviePage() {
    const params = useParams()
    const movieId = Number(params.id)

    const { url, loading, error } = useStream(movieId)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error loading stream</p>
    if (!url) return null

    return <VideoPlayer src={url} />
}