import Header from "./component/Header";
import ExtensionGrid from "./component/ExtensionGrid";

export default function App() {
  return (
    <main className="p-4 space-y-8 xl:px-0 bg-neutral-200 wrapper min-h-dvh md:space-y-10">
      <Header />
      <ExtensionGrid />
    </main>
  );
}
