import React from 'https://esm.sh/react'

export default function MoonIcon({ width = 75 }: { width?: number }) {
    return (
        <img src="moon.svg" width={width} title="Dark Mode" />
    )
}
