export default function FileUploader({ handleFile }) {
  const onChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const onDragOver = (e) => e.preventDefault();

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="w-full flex flex-col items-center p-6 border-2 border-dashed border-blue-400 rounded-2xl mb-6 cursor-pointer hover:border-cyan-400 transition-colors duration-300"
    >
      <p className="text-blue-200 mb-2">Drag & drop a document here</p>
      <p className="text-blue-300 mb-4">or</p>
      <input
        type="file"
        onChange={onChange}
        className="text-white cursor-pointer"
      />
    </div>
  );
}
