import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <h1 className="text-h1 text-primary">Heading 1</h1>
      <p className="text-body-lg tracking-body">Body large</p>
      <button className="text-sm text-primary font-medium tracking-button-label shadow-sm">
        Button
      </button>
      <div className="leading-snug">Snug line height</div>
      <div className="gap-loose grid grid-cols-3">…</div>
    </div>
  );
}

export default App;
