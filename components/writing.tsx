interface WritingItem {
  title: string;
  description: string;
  link: string;
}

const writingItems: WritingItem[] = [
  {
    title: "Dark Mode in React Native",
    description:
      "Implementing Dark Mode in React Native: A Comprehensive Guide",
    link: "https://www.linkedin.com/pulse/implementing-dark-mode-react-native-comprehensive-guide-saeed/",
  },
  {
    title: "React Native Underlay Sheet UI",
    description: "Implementing an Underlay Sheet UI in React Native",
    link: "https://read.cv/sae/react-native-underlay-sheet-ui",
  },
];

export default function Writing() {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-bold mb-4 text-foreground">Writings</h2>
      <ul className="space-y-4">
        {writingItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.link}
              className="block group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                {item.title}
              </span>
              <p className="mt-1 text-muted-foreground font-medium">
                {item.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
