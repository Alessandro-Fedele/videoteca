"use client";
import { MoviePosition } from "@/models/film";
import "./MovieDetails.css";
import { renderPositionLabel } from "@/utils/renderPositionLabel";

type FilmPositionProps = {
  position: MoviePosition | "";
  onClose: () => void;
};

const FilmPosition = ({ position, onClose }: FilmPositionProps) => {
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
              <div className="fila">
                <div
                  className={`sezione f1s1 ${position === "F1S1" && "active"}`}
                ></div>
                <div
                  className={`sezione f1s2 ${position === "F1S2" && "active"}`}
                ></div>
                <div
                  className={`sezione f1s3 ${position === "F1S3" && "active"}`}
                ></div>
                <div
                  className={`sezione f1s4 ${position === "F1S4" && "active"}`}
                ></div>
              </div>
              <div className="fila">
                <div
                  className={`sezione f2s1 ${position === "F2S1" && "active"}`}
                ></div>
                <div
                  className={`sezione f2s2 ${position === "F2S2" && "active"}`}
                ></div>
                <div
                  className={`sezione f2s3 ${position === "F2S3" && "active"}`}
                ></div>
                <div
                  className={`sezione f2s4 ${position === "F2S4" && "active"}`}
                ></div>
              </div>
              <div className="fila">
                <div
                  className={`sezione f3s1 ${position === "F3S1" && "active"}`}
                ></div>
                <div
                  className={`sezione f3s2 ${position === "F3S2" && "active"}`}
                ></div>
                <div
                  className={`sezione f3s3 ${position === "F3S3" && "active"}`}
                ></div>
                <div
                  className={`sezione f3s4 ${position === "F3S4" && "active"}`}
                ></div>
              </div>
              <div className="fila">
                <div
                  className={`sezione f4s1 ${position === "F4S1" && "active"}`}
                ></div>
                <div
                  className={`sezione f4s2 ${position === "F4S2" && "active"}`}
                ></div>
                <div
                  className={`sezione f4s3 ${position === "F4S3" && "active"}`}
                ></div>
                <div
                  className={`sezione f4s4 ${position === "F4S4" && "active"}`}
                ></div>
              </div>
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
