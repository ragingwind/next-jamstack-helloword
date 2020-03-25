# Cosmicjs Blog with Next.js

> A statically generated blog example using Next.js and Cosmicjs. Base blog template has been inspired heavily from [Next.js blog examples](https://github.com/zeit/next.js/tree/canary/examples/blog-starter) and tweaked it simpler to understand how JAMStack works.

# Demo
[https://next-cosmicjs-blog.now.sh/](https://next-cosmicjs-blog.now.sh/)

# Configuration for CosmicsJS

1. Create a Buckets
1. Add `Posts` object
1. Add `Author` object
1. Add an author to `Author` object with a profile image
1. Add a post and author to `Post`

Here is a structure of content

```sh
Blog
  |- Posts
  |-- Post
  |--- Metafields
  |----- Author
  |- Author
  |-- Metafields
  |---- Profile
```

# Setup Next.js environment variables

Please refer to [Step 5. Set up environment variables](https://github.com/zeit/next.js/tree/canary/examples/cms-takeshape#step-5-set-up-environment-variables) in the other examples. No big changes, all of steps are same except names of env variable.

# License

MIT @ Jimmy Moon