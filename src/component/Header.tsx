import logo from "../assets/images/logo.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2.5 border-b rounded-lg bg-neutral-0 border-neutral-300 shadow shadow-neutral-300 col-start-2">
      <img src={logo} alt="App logo" aria-hidden />
      <button
        className="p-3 rounded-xl bg-neutral-100 hover:bg-neutral-300 outline-red-400 outline-offset-2 focus-visible:bg-neutral-300"
        aria-label="Toggle dark mode"
        type="button"
      >
        <img src={moonIcon} alt={`Moon icon`} aria-hidden />
      </button>
    </header>
  );
}
