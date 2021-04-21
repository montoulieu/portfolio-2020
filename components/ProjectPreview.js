export default function ProjectPreview({ children }) {
  return (
    <div className="project-preview shadow-2xl border-2 border-gray-500 relative z-30 w-full">
      <div className="bezel bg-black p-4 overflow-hidden">
        { children }
      </div>
    </div>
  );
}
