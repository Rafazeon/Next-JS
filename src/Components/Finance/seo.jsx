import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const url = 'https://distracted-volhard-ed57b2.netlify.com/'

export default function() {
    const router = useRouter()
    const query = router.query
    const title = query && query.title
    const description = query && query.description
    
    return (
        <Head>
            <title>{title ? title : 'Página Inicial | Lira Financeira'}</title>
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:locale" content="pt" />
            <meta name="og:title" property="og:title" content={title ? title : 'Página Inicial | Lira Financeira'} />
            <meta name="description" content={description ? description : 'Empréstimo consignado em Florianópolis'} />
            <link rel='icon' href='/favicon.ico' />
            <script src="//code.jivosite.com/widget.js" data-jv-id="xZ13zCPsxr" async></script>
        </Head>
    )
}

