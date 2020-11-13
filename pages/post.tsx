import { Head, Link, Import } from 'https://deno.land/x/aleph/mod.ts'
import React, { ComponentType } from 'https://esm.sh/react'

interface Metadata {
    title: string
    author: string
    date: string
}

export default function Blog({ Page }: { Page: ComponentType & { meta: Metadata } }) {
    return (
        <>
            <Head>
                <title>{Page.meta.title}</title>
                <Import from="../style/blog.less" />
                <Import from="../components/markdown.css"></Import>
            </Head>
            <div className="container">
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
                <div className="app row">

                    <div className="col-sm-9 blog-content">
                        <Page />
                    </div>
                    <div className="col-sm-3 sidebar"></div>
                </div>
            </div>


        </>
    )
}
