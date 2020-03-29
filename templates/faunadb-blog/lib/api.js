import fetch from 'node-fetch'

const SECRET_KEY = process.env.NEXT_TEMPLATE_FAUNADB_SECRET
const ENDPOINT = 'https://graphql.fauna.com/graphql'

async function request(query) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${SECRET_KEY}`,
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      query
    })
  })

  const data = await res.json()

  if (data.error) {
    return {}
  }

  return data.data
}

export async function getPosts() {
  const query = `query {
    posts {
      data {
        title
        author {
          name
          profile
        }
        content
        _id
      }
    }
  }`

  const data = await request(query)

  return data.posts.data.map(d => {
    return {
      ...d,
      slug: d._id
    }
  })
}

export async function getPost(id) {
  const query = `query {
    findPostByID(id: "${id}") {
      title
      author {
        name
        profile
      }
      content
    }
  }`

  const data = await request(query)

  return data.findPostByID
}
