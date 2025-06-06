import Header from "./components/Header";
import ExtensionGrid from "./components/ExtensionGrid";

export default function App() {
  return (
    <main className="p-4 space-y-8 xl:px-0 wrapper min-h-dvh md:space-y-10 bg-theme-gradient">
      <Header />
      <ExtensionGrid />
    </main>
  );
}
