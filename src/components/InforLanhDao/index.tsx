import React, { useEffect } from "react";
import CardCustom from "../../custom/Card";
import { Leader } from "../../interface/leader";
import { CaretRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
interface LeaderPageProps {
    leaders: Leader[];
}

const LeaderPage: React.FC<LeaderPageProps> = ({ leaders }) => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const handleClick = (path: any) => {
        navigate(`/chien-si-hi-sinh/${path}`);
    };
    return (
        <div className="leader-page">
            <div className="leader-grid">
                {leaders.map((leader) => (
                    <CardCustom key={leader.id}>
                        <div className="leader-card">
                            <div className="leader-left">
                                <div className="leader-img-wrapper">
                                    <img src={leader.img} alt={leader.name} className="leader-img" />
                                </div>
                                <p className="leader-birth font-kodchasan" style={{ fontSize: '20px', marginTop: '-5px' }}>{leader.name}</p>
                                <p className="leader-birth font-dancing" style={{ paddingBottom: '5px' }}> {leader.birth}</p>
                                <p className="leader-description">{leader.description}</p>
                            </div>
                            <div className="leader-right">
                                <p className="battle-year"> {leader.battleYear}</p>
                                <p className="battle-description">{leader.battleDescription}</p>
                                <p
                                    onClick={() => handleClick(leader.battleYear)}
                                    className="timeline-link"
                                    style={{
                                        fontSize: "15px",
                                        marginBottom: '0px',
                                        marginTop: "auto",
                                        alignSelf: "flex-end",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        fontWeight: 600,

                                    }}
                                >
                                    <CaretRightOutlined /> Xem thêm
                                </p>
                            </div>
                        </div>
                    </CardCustom>
                ))}
            </div>
        </div>
    );
};

export default LeaderPage;