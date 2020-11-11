import React from 'https://esm.sh/react'

export default function MyGravatar({ width = 75 }: { width?: number }) {
    return (
        <img src="https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?size=256" width={width} title="Moncef Gaha Graavatar" />
    )
}
