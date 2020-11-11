import React, { ComponentType } from 'https://esm.sh/react'
import { Head } from 'https://deno.land/x/aleph/mod.ts'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    return (
        <>
            <Head>
                <title>Moncef Gaha</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?size=32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?size=16"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1">

            </Head>
            <Page {...pageProps} />
        </>
    )
}
