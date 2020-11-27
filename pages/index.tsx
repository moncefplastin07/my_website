import { Import, useDeno, Link } from 'https://deno.land/x/aleph/mod.ts'
import React, { useState } from 'https://esm.sh/react'
import MyGravatar from '../components/MyGravatar.tsx'
import DisplayModeSwitcherButton from "../components/DisplayModeSwitcherButton.tsx";

export default function Home() {
    const version = useDeno(() => {
        return Deno.version
    })

    return (
        <>
            <DisplayModeSwitcherButton />
            <div className="page">

            <Import from="../style/index.less" />
            <Import from="../style/bootstrap.css" />

            <p className="myGravatar"><MyGravatar width="265" /></p>
            <h1><strong>Moncef Gaha</strong></h1>

            <p className="links">
                <a href="https://github.com/moncefplastin07" target="_blank">GitHub</a>
                <span>&middot;</span>
                <a href="https://twitter.com/moncefplastin07" target="_blank">Twitter</a>
                <span>&middot;</span>
                <a href="https://facebook.com/moncefplastin07" target="_blank">Facebook</a>
                <span>&middot;</span>
                <a href="https://instagram.com/moncefplastin07" target="_blank">Instagram</a>
                <span>&middot;</span>
                <Link to="/blog">
                    <a>Blog</a>
                </Link>
            </p>
            <br/>
            <p>
                <strong>Web backend developer from Biskra/Algeria</strong>
            </p>
            <br/>
            <p>
                <strong>E-mail: <a href="mailto:moncefplastin07@gmail.com">moncefplastin07@gmail.com</a></strong>
            </p>
            <br/>

            <p className="copyinfo">Built by Aleph.js in Deno v{version.deno}</p>
        </div>
        </>

    )
}
