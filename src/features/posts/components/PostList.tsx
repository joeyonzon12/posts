import { Button } from "@/components/ui/button";
import { usePosts } from "../posts.hooks";
import PostRow, { PostRowSkeleton } from "./Post";

const PostList = () => {
  const { isPending, isError, error, data, refetch } = usePosts();

  if (isPending) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Loading posts...</p>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((index) => (
            <PostRowSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 rounded-lg border border-destructive/20 bg-destructive/5">
        <h3 className="text-lg font-semibold text-destructive">The posts didn't load</h3>
        <p className="text-sm text-muted-foreground">
          {error?.message || "An unexpected error occurred."}
        </p>
        <Button onClick={() => refetch()} variant="outline">
          Try again
        </Button>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Nothing published yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {data.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;