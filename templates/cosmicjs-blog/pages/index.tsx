import Head from 'next/head'
import {Layout, Hero, Container, Posts} from '@next-template/components/blog'
import { getObjects } from '../lib/api'

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
  const posts = await getObjects('slug,title,content,metadata')

  return {
    props: {
      posts
    }
  }
}
