# FaunaDB Blog with Next.js

> A statically generated blog example using Next.js and Cosmicjs. Base blog template has been inspired heavily from [Next.js blog examples](https://github.com/zeit/next.js/tree/canary/examples/blog-starter) and tweaked it simpler to understand how JAMStack works.

# Demo
[next-faunadb-blog.now.sh/](next-faunadb-blog.now.sh/)

# Configuration

1. Upload Graphql schema

```js
type Query {
  person: [Person!]!
  posts: [Post!]!
}

type Person {
  name: String!
  profile: String!
}

type Post {
  title: String!
  author: Person!
  content: String!
}
```

# Setup Next.js environment variables

Please refer to [Step 5. Set up environment variables](https://github.com/zeit/next.js/tree/canary/examples/cms-takeshape#step-5-set-up-environment-variables) in the other examples. No big changes, all of steps are same except names of env variable.

# License

MIT @ Jimmy Moon