interface TweetCardProps {
  id: string;
}

export default function TweetCard({ id }: TweetCardProps) {
  const tweetUrl = `https://twitter.com/i/web/status/${id}`;

  return (
    <a
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="my-6 block rounded-lg border border-border bg-card p-4 text-card-foreground transition-colors hover:border-primary/50"
    >
      <p className="text-sm font-medium">View the original prototype on X</p>
      <p className="mt-1 break-all text-sm text-muted-foreground">{tweetUrl}</p>
    </a>
  );
}
