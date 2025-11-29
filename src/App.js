import './index.css';

function App() {
  return (
    <div className="App">
      <TestTailwind/>
    </div>
  );
}

function TestTailwind() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="p-6 rounded-xl shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">
          Tailwind v4 is Working! 🎉
        </h1>
        <p className="text-gray-700">
          If you can see this styled text, your setup is correct.
        </p>
      </div>
    </div>
  );
}

export default App;
