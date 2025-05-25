import { useEffect, useState } from "react";

const ProgressBar = ({ progressValue }: { progressValue: number }) => {
  return (
    <div className="border border-green-600 rounded-full w-[70vw] h-6 overflow-hidden bg-gray-100">
      <div
        style={{
          transform: `translateX(${-(100 - progressValue)}%)`,
        }}
        className="bg-green-300 h-full w-full transition-transform duration-1000 ease-in text-sm text-black pr-2 flex items-center justify-end"
      >
        {progressValue}%
      </div>
    </div>
  );
};

function App() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setProgress(60);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <ProgressBar progressValue={progress} />
    </div>
  );
}

export default App;
