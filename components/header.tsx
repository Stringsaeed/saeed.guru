import SaeedAvi from "@/components/saeed-avi";

export default function Header() {
  return (
    <header className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-background border border-border">
          <SaeedAvi />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Saeed</h1>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        Software engineer specializing in react-native and web. Currently
        looking <span className="font-medium">for a new challenge</span> Based
        in <span className="font-medium">Dubai</span>.
      </p>
    </header>
  );
}
