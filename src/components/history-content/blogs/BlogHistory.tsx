import BlogHistoryCard from "./components/BlogHistoryCard"

const BlogHistory = () => {
  return (
    <div className="w-full flex flex-col gap-2 h-full">
      <BlogHistoryCard />
      <BlogHistoryCard />
      <BlogHistoryCard />
      <BlogHistoryCard />
    </div>
  )
}

export default BlogHistory