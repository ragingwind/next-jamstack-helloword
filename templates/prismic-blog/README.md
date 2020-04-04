# Prismic Blog with Next.js

> A statically generated blog example using Next.js and Cosmicjs. Base blog template has been inspired heavily from [Next.js blog examples](https://github.com/zeit/next.js/tree/canary/examples/blog-starter) and tweaked it simpler to understand how JAMStack works.

# Demo

[demo](https://prismic-blog.now.sh/)

# Configuration

1. Add custom type to prismic

```json
{
  "Main" : {
    "title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Title"
      }
    },
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "Url"
      }
    },
    "body" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "label" : "Body"
      }
    },
    "profile" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : 32,
          "height" : 32
        },
        "thumbnails" : [ ],
        "label" : "profile"
      }
    },
    "author" : {
      "type" : "Text",
      "config" : {
        "label" : "author"
      }
    }
  }
}
```

2. Create a new post with blog data, title, content, profile and author

# Setup Next.js environment variables

Please refer to [Step 5. Set up environment variables](https://github.com/zeit/next.js/tree/canary/examples/cms-takeshape#step-5-set-up-environment-variables) in the other examples. No big changes, all of steps are same except names of env variable.

# License

MIT @ Jimmy Moon