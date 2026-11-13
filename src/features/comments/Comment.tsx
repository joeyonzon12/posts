import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Comment } from "./components/comments.types";

const CommentItem = ({ comment }: { comment: Comment }) => (
  <Card size="sm">
    <CardHeader className="flex flex-row items-start justify-between gap-4">
      <div className="min-w-0">
        <h3 className="truncate font-medium">{comment.name}</h3>
        <a
          className="mt-1 block truncate text-xs text-muted-foreground hover:text-foreground"
          href={`mailto:${comment.email}`}
        >
          {comment.email}
        </a>
      </div>
    </CardHeader>
    <CardContent>
      <p className="whitespace-pre-wrap text-[0.9375rem] leading-relaxed text-muted-foreground">
        {comment.body}
      </p>
    </CardContent>
  </Card>
);

export const CommentItemSkeleton = () => (
  <Card size="sm" aria-hidden="true">
    <CardHeader className="gap-2">
      <Skeleton className="h-4 w-40 rounded-md" />
      <Skeleton className="h-3 w-48 rounded-md" />
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      <Skeleton className="h-4 rounded-md" />
      <Skeleton className="h-4 w-5/6 rounded-md" />
    </CardContent>
  </Card>
);

export default CommentItem;
