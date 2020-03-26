export default function Post({ post }) {
  return (
    <div className="p-8 my-10">
      <div className="text-6xl font-bold mb-4">
        <h1>{post.title}</h1>
      </div>
      <div className="flex justify-start items-center py-10">
        <img
          className="h-16 w-16 rounded-full"
          src={post.author.profile}
        />
        <div className="text-2xl font-medium pl-4">
          {post.author.name}
        </div>
      </div>
      <div
        className="text-2xl text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}
