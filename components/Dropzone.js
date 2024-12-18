import React, { useState } from "react";

export default function Dropzone({ label, maxSizeMB, dimensions }) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    const isValidSize = file.size / 1024 / 1024 <= maxSizeMB;
    if (!isValidSize) {
      setError(`File size exceeds ${maxSizeMB} MB`);
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (
        (dimensions.width && img.width !== dimensions.width) ||
        (dimensions.height && img.height !== dimensions.height)
      ) {
        setError(`Image dimensions must be ${dimensions.width}x${dimensions.height}px.`);
        return;
      }
      setError(""); // Clear any errors
      setPreview(img.src); // Set preview
    };
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleBrowse = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  return (
    <div className="space-y-2 flex flex-col h-full mt-4">
      <label className="block text-sm font-medium text-gray-700 grow-0">{label}</label>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="relative border-dashed border-2 border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer h-full"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        {preview ? <img
          src={preview}
          alt="Preview"
          className="object-cover rounded-lg"
          style={{ maxHeight: "100%" }}
        /> : <>
          <p><strong>Browse photo</strong> or drop here</p>
          <p className="text-sm text-slate-400">A photo larger than 400 pixels works best. Max photo size is 5 MB</p>
        </>}
        <input
          type="file"
          accept="image/*"
          onChange={handleBrowse}
          className="absolute cursor-pointer inset-0 opacity-0"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
