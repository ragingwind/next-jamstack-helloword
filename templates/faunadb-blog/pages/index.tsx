import Head from 'next/head'
import Layout from '@next-template/components/layout'
import Hero from '@next-template/components/hero'
import Container from '@next-template/components/container'
import Posts from '@next-template/components/posts'
import { getPosts } from '../lib/api'

export default function Index({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <Hero />
      <Container>
        <Posts posts={posts}></Posts>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}
