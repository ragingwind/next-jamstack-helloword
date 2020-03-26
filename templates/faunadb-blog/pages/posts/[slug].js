import Head from 'next/head'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import Container from '../../components/container'
import Post from '../../components/post'
import { getPosts, getPost } from '../../lib/api'

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

  const post = await getPost(params.slug)

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ _id }) => {
      return {
        params: {
          slug: _id
        }
      }
    }),
    fallback: false
  }
}
