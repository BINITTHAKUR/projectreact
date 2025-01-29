import { useState } from "react";

function TextInput({ type = "text", label, value, onChangeHandler }) {
  const [text, setText] = useState("");

  return (
    <>
      <label>
        <span className="text-gray-700">{label}</span>
        <input
          type={type}
          className="px-4 py-2 border border-gray-500 rounded-md w-full"
          placeholder="placeholder"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(text);
        }}
      >
        Hit
      </button>
    </>
  );
}
export default TextInput;
