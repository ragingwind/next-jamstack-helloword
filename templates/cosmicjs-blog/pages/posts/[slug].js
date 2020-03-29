import Head from 'next/head'
import {Layout, Hero, Container, Post} from '@next-template/components/blog'
import { getObjects, getObject } from '../../lib/api'

export default function Index({ post }) {
  return (
    <Layout>
      <Head>
        <title>Next.js Template - {post.title}</title>
      </Head>
      <Hero />
      <Container>
        <Post post={post}></Post>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  if (!params) {
    return {
      props: {}
    }
  }

  const post = await getObject(params.slug, 'slug,title,content,metadata')

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const posts = await getObjects('slug')

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug
        }
      }
    }),
    fallback: false
  }
}
