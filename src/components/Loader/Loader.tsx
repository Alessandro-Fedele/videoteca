import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-bg">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Wake up, Neo...</div>
      </div>
    </div>
  );
}
