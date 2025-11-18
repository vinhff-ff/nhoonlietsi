import React from "react";
import { useParams } from "react-router-dom";
import { leaders } from "../../data/leader";
import InforLeader from "../../components/InforLanhDao/index";
import { Leader } from "../../interface/leader";
import XinLoiPage from "../page404/thieuThongTin";


const PeriodPage: React.FC = () => {
    const { period } = useParams<{ period: string }>();
    const leadersInPeriod: Leader[] = leaders.filter(l => l.id === period);

    if (leadersInPeriod.length === 0) {
        return <XinLoiPage/>;
    }

    return <div className="thongtincuocchien">
        <InforLeader leaders={leadersInPeriod} />
    </div>;
};

export default PeriodPage;
