// components/BeforeAfter.tsx
import Image from 'next/image';

type Item = {
  src: string;
  alt?: string;
  caption?: React.ReactNode;
  label?: string;
  subLabel?: string;
};

export function BeforeAfter({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: {
  before: Item;
  after: Item;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <figure className="not-prose my-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ImageCard label={beforeLabel} subLabel={before.subLabel} item={before} />
        <ImageCard label={afterLabel} subLabel={after.subLabel} item={after} />
      </div>
    </figure>
  );
}

function ImageCard({ label, subLabel, item }: { label: string; subLabel?: string; item: Item }) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-medium uppercase tracking-wide text-gray-500 text-muted-foreground/80">
        {label}
      </div>
      {subLabel ? (
        <div className="text-xs font-medium uppercase tracking-wide text-gray-500 text-muted-foreground/80">
          {subLabel}
        </div>
      ) : null}
      <div className="relative overflow-hidden rounded-xl border border-black/10">
        {/* If your images have known dimensions, prefer width/height.
            `fill` is flexible + looks great for comparisons. */}
        <div className="relative aspect-[9/16]">
          <Image
            src={item.src}
            alt={item.alt ?? ''}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>

      {item.caption ? (
        <figcaption className="text-sm text-gray-600">{item.caption}</figcaption>
      ) : null}
    </div>
  );
}
