import Prismic from 'prismic-javascript';
import fetch from 'node-fetch';

const SECRET_KEY = process.env.NEXT_TEMPLATE_PRISMIC_SECRET
const ENDPOINT = 'https://next-prismic-blog-repo.cdn.prismic.io/api/v2';

export async function getPosts() {
  try {
    const API = await Prismic.api(ENDPOINT);
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'blog_post'),
      {
        orderings: '[my.blog_post.date desc]'
      }
    );

    const posts = response.results.map(r => {
      return {
        slug: r.uid,
        title: r.data.title[0].text,
        content: r.data.body[0].text,
        author: {
          profile: r.data.profile.url,
          title: r.data.author
        }
      };
    });

    return posts;
  } catch (error) {
    return error;
  }
}

export async function getPost(slug) {
  try {
    const API = await Prismic.api(ENDPOINT);
    const response = await API.query(
      Prismic.Predicates.at('my.blog_post.uid', slug)
    );

    const r = response.results[0];
    const post = {
      slug: r.uid,
      title: r.data.title[0].text,
      content: r.data.body[0].text.replace(/\n/g, '<br/>'),
      author: {
        profile: r.data.profile.url,
        title: r.data.author
      }
    };
    return post;
  } catch (error) {
    return error;
  }
}
