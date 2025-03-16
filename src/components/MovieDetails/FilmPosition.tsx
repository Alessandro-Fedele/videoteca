"use client";
import { MoviePosition } from "@/models/film";
import "./MovieDetails.css";
import { renderPositionLabel } from "@/utils/renderPositionLabel";

type FilmPositionProps = {
  position: MoviePosition | "";
  onClose: () => void;
};

const FilmPosition = ({ position, onClose }: FilmPositionProps) => {
  const rows = [1, 2, 3, 4];
  const columns = [1, 2, 3, 4];

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Chiude la modale solo se si clicca fuori dalla modale
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="film-position-overlay" onClick={handleOverlayClick}>
      <div className="film-position-modal">
        <div className="modal-header">
          <h2 className="modal-title">Il film si trova qui:</h2>
          <button className="close-modal" onClick={onClose}>
            x
          </button>
        </div>
        {position ? (
          <div>
            <div className="position-label">
              {renderPositionLabel(position)}
            </div>
            <div className="videoteca">
              {rows.map((row) => (
                <div key={`row-${row}`} className="fila">
                  {columns.map((col) => {
                    const currentPos = `F${row}S${col}` as MoviePosition;
                    return (
                      <div
                        key={currentPos}
                        className={`sezione ${
                          position === currentPos ? "active" : ""
                        }`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="film_coming">{renderPositionLabel(position)}</div>
        )}
      </div>
    </div>
  );
};

export default FilmPosition;
