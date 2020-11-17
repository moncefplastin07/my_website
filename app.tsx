import React, { ComponentType } from 'https://esm.sh/react'
import { Head } from 'https://deno.land/x/aleph/mod.ts'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Moncef Gaha</title>
                <meta name="theme-color" content="#000"/>
                <meta name="description" content="Moncef Gaha website, Web backend developer from Algeria/Biskra"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta name="image" content="https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?size=256"/>
                <meta name="geo.region" content="Algaria"/>
                <meta name="geo.placename" content="Biskra"/>

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

            </Head>
            <Page {...pageProps} />
        </>
    )
}
