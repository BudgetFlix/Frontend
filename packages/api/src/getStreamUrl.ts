export async function getStreamUrl(movieId: number): Promise<string> {
    const res = await fetch(`/api/stream/${movieId}`)

    if (!res.ok) {
        throw new Error("Failed to fetch stream url")
    }

    return res.text()
}