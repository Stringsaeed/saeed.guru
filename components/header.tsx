import SaeedAvi from '@/components/saeed-avi';

export default function Header() {
  return (
    <header className="mb-12">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-border bg-background">
          <SaeedAvi />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Saeed</h1>
      </div>
      <p className="leading-relaxed text-muted-foreground">
        Software engineer specializing in react-native and web based in{' '}
        <span className="font-medium">Dubai</span>. Currently looking{' '}
        <span className="font-medium">for a new challenge.</span>
      </p>
    </header>
  );
}
