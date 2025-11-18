import { CaretRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import type { Period } from "./interface";
import QuyTrinh from '../../asset/quyTrinh.png'
interface TimelineDesktopProps {
  events: Period[];
}

export default function TimelineMobile({ events }: TimelineDesktopProps) {
  const navigate = useNavigate();

  return (
    <div className="timeline-wrapper-mb">
      <div className="timeline-items-mb">
        {events.map((event, index) => (
          <div key={index} className="timeline-item-mb font-dancing">
            <img
              src={QuyTrinh}
              alt="quy trình"
              className="timeline-dot-mb"
            />

            <div className="timeline-info-mb">
              <h4>{event.title}</h4>

              <p
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {event.description}
              </p>

              <p
                className="timeline-link"
                onClick={() => navigate(event.path)}
              >
                <CaretRightOutlined /> Xem thêm
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
