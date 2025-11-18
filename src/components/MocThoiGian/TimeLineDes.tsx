import { useNavigate } from "react-router-dom";
import type { Period } from "./interface";
import { CaretRightOutlined } from "@ant-design/icons";
import QuyTrinh from '../../asset/quyTrinh.png'
interface TimelineDesktopProps {
  events: Period[];
}

export default function TimelineDesktop({ events }: TimelineDesktopProps) {
  const navigate = useNavigate();

  return (
    <div className="timeline-wrapper">
      <div className="timeline-line" />
      <div className="timeline-items">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "top" : "bottom"}`}
          >
            <div className="timeline-info font-dancing">
              <h4 className="the-p-cua-md">{event.title}</h4>

              <p
                className="the-p-cua-md "
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {event.description}
              </p>

              <p
                className="timeline-link"
                onClick={() => navigate(event.path)}
                style={{ fontSize: "14px" }}
              >
                <CaretRightOutlined /> Xem thêm
              </p>
            </div>

            <img
              src={QuyTrinh}
              alt="quy trình"
              className="timeline-dot"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
