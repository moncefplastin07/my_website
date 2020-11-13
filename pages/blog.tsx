import { Head, Link, Import } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import DisplayModeSwitcherButton from "../components/DisplayModeSwitcherButton.tsx"
//import "bootstarp/dist/css/bootstrap.min.css"

export default function Blog() {
    return (
        <>
            <Head>
                <title>My Blog.</title>
                <Import from="../style/index.less" />
            </Head>
            <div className="blog-page">
                <h1>Coming soon ..</h1>
                <DisplayModeSwitcherButton />
            </div>
        </>
    )
}
