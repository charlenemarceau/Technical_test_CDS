import { useRef } from "react";

const FileDrop = ({ sendFileData }: { sendFileData: (file: File) => void }) => {
  const dropzoneRef = useRef<HTMLDivElement | null>(null);
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzoneRef.current) {
      dropzoneRef.current.style.border = "2px dashed #ccc";
    }
  };

  const handleDragLeave = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.style.border = "2px dashed #ccc";
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzoneRef.current) {
      dropzoneRef.current.style.border = "2px dashed #00f";
    }
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      sendFileData(file);
    }
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      sendFileData(file);
    }
  };

  return (
    <div className="flex items-center justify-center global">
      <div
        id="dropzone"
        ref={dropzoneRef}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="index_content">
          <h3>Drag and drop your 3D Object</h3>
          <p>or</p>
          <h3>Select your 3D Object</h3>
          <input
            type="file"
            id="fileInput"
            accept=".glb, .gltf, .usdz, .fbx, .obj, .stl"
            onChange={handleFileInputChange}
            style={{ display: "block", margin: "10px auto" }}
          />
        </div>
      </div>
    </div>
  )
}

export default FileDrop
