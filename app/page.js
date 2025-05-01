import PostCard from "@/components/PostCard"
import getPostMetadata from "@/utils/getPostMetaData";


export default function Home() {
  const postMetaData = getPostMetadata('recipes')
  return (
    <main>
      <div className="postsContainer">
        {postMetaData.map((post, postIndex) => {
          return (
            <PostCard key={postIndex} post={post}/>
          )
        })}
      </div>
    </main>
  );
}
