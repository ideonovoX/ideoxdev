
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BlogPost {
  title: string;
  slug: string;
}

interface FooterBlogPostsProps {
  posts: BlogPost[];
}

const FooterBlogPosts = ({ posts }: FooterBlogPostsProps) => {
  return (
    <ul className="space-y-3">
      {posts.map((post, index) => (
        <li key={index}>
          <Link 
            to={`/blog/${post.slug}`}
            className={cn(
              "text-slate-600 dark:text-slate-400 hover:text-slack-purple dark:hover:text-slack-purple transition-colors relative inline-block truncate max-w-full block",
              "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            )}
            title={post.title}
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterBlogPosts;
