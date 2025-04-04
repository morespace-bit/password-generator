import { useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const copyRef = useRef(null);

  const word = () => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) {
      string += "0123456789";
    }
    if (char) {
      string += "!@#$%^&*()_+-=[]{}|;:,.<>?/`~";
    }
    for (let i = 1; i <= length; i++) {
      let value = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(value);
    }
    setPassword(pass);
  };
  useEffect(() => {
    word();
  }, [length, char, num]);

  function copy() {
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <main className="min-h-screen w-full flex justify-center items-center bg-black">
        <div className="h-50 w-120 flex justify-center items-center bg-blue-300 flex-col gap-5">
          <p>Password Generator</p>
          <div className="w-full flex justify-around">
            <input
              type="text"
              readOnly
              placeholder={password}
              class=" w-[80%] px-3 py-2 border-2 border-blue-900 bg-white rounded-full"
              ref={copyRef}
            />
            <button
              onClick={copy}
              className="px-5 py-2 bg-emerald-600 rounded-full hover:scale-110 transition-all ease-in active:scale-95"
            >
              Copy
            </button>
          </div>
          <div className="felx justify-center items-center gap-4">
            <input
              type="range"
              min={8} // Min value for the range slider
              max={100} // Max value for the range slider
              value={length} // Bind the value to the state
              onChange={(e) => {
                setLength(Number(e.target.value)); // Convert to number on change
              }}
            />{" "}
            <label htmlFor="">Length :{length}</label>
            <input
              type="checkbox"
              onClick={() => {
                setChar((pre) => !pre);
              }}
            />
            <label htmlFor="">Special Characters</label>
            <input
              type="checkbox"
              onClick={() => {
                setNum((pre) => !pre);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
