import { MessageCircle, ThumbsUp } from "lucide-react";
type Props = {
  title: string;
  publisher: string;
  commentsCount: number;
  likesCount: number;
};
const Blog = ({ title, publisher, commentsCount, likesCount }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <b>{title}</b>
      <p className="small-text">Published by {publisher}</p>
      <div className="flex flex-col small-text">
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <MessageCircle className="cursor-pointer" />
            <span>{likesCount}</span>
          </div>
          <div className="flex gap-1 items-center">
            <ThumbsUp className="cursor-pointer" />
            <span>{commentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
