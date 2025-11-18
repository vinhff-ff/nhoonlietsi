import { Drawer } from "antd";
import HoaVan from '../../asset/hoavan.png'
interface DrawerCustomProps {
    open: boolean;
    onClose: () => void;
    width?: number;
    height?: number;
    placement?: "left" | "right" | "top" | "bottom";
    children: React.ReactNode;
    radius?: {
        topLeft?: string;
        topRight?: string;
        bottomLeft?: string;
        bottomRight?: string;
    };
}

const DrawerCustom: React.FC<DrawerCustomProps> = ({
    open,
    onClose,
    width = 250,
    placement = "right",
    children,
    radius,
    height = '100vh'
}) => {
    const borderRadiusStyle = {
        borderTopLeftRadius: radius?.topLeft || 0,
        borderTopRightRadius: radius?.topRight || 0,
        borderBottomLeftRadius: radius?.bottomLeft || 0,
        borderBottomRightRadius: radius?.bottomRight || 0,
    };

    return (
        <Drawer
            open={open}
            onClose={onClose}
            width={width}
            height={height}
            placement={placement}
            closable={false}
            title={undefined}
            bodyStyle={{ ...borderRadiusStyle }}
            drawerStyle={{ ...borderRadiusStyle }}
            style={{
                backgroundImage: `url(${HoaVan})`,
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
                backgroundPosition: "center",
            }}
        >
            {children}
        </Drawer >
    );
};

export default DrawerCustom;
