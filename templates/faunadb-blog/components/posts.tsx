export default function Posts({ posts }) {
  return (
    <>
      {posts &&
        posts.map((post, i) => (
          <div className="p-8 my-10" key={i}>
            <div className="text-5xl font-light mb-4 hover:underline">
              <a href={`/posts/${post._id}`}>{post.title}</a>
            </div>
            <div
              className="text-xl text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content.slice(0, 500) }}
            />
            <div className="flex justify-start items-center py-4">
              <img
                className="h-16 w-16 rounded-full"
                src={post.author.profile}
              />
              <div className="text-2xl font-medium pl-4">
                {post.author.name}
              </div>
            </div>
          </div>
        ))}
    </>
  )
}
