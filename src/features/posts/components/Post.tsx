import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Post } from "../posts.types";

interface PostRowProps {
  post: Post;
}

const PostRow = ({ post }: PostRowProps) => {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Link 
          to={`/posts/${post.id}`} 
          className="font-semibold text-primary hover:underline line-clamp-1"
        >
          {post.title}
        </Link>
        <span className="text-xs text-muted-foreground font-mono">
          #{post.id}
        </span>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.body}
        </p>
      </CardContent>
    </Card>
  );
};

export default PostRow;

export const PostRowSkeleton = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-10" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </CardContent>
    </Card>
  );
};