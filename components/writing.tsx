interface WritingItem {
  title: string;
  description: string;
  link: string;
}

const writingItems: WritingItem[] = [
  {
    title: 'Dark Mode in React Native',
    description: 'Implementing Dark Mode in React Native: A Comprehensive Guide',
    link: 'https://www.linkedin.com/pulse/implementing-dark-mode-react-native-comprehensive-guide-saeed/',
  },
  {
    title: 'React Native Underlay Sheet UI',
    description: 'Implementing an Underlay Sheet UI in React Native',
    link: 'https://read.cv/sae/react-native-underlay-sheet-ui',
  },
];

export default function Writing() {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-lg font-bold text-foreground">Writings</h2>
      <ul className="space-y-4">
        {writingItems.map((item) => (
          <li key={item.title}>
            <a href={item.link} className="group block" target="_blank" rel="noopener noreferrer">
              <span className="text-base font-semibold text-foreground transition-colors hover:text-primary">
                {item.title}
              </span>
              <p className="mt-1 font-medium text-muted-foreground">{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
