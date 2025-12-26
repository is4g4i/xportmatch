import { FaFutbol, FaBasketballBall } from "react-icons/fa";
import { GiTennisBall } from "react-icons/gi";

export interface SportOption {
    id: string;
    label: string;
    icon: React.ReactNode;
}

export const SPORTS_OPTIONS: SportOption[] = [
    { id: "futbol5", label: "Canchas Futbol 5", icon: <FaFutbol /> },
    { id: "futbol7", label: "Canchas Futbol 7", icon: <FaFutbol /> },
    { id: "futbol11", label: "Canchas Futbol 11", icon: <FaFutbol /> },
    { id: "tennis", label: "Tennis", icon: <GiTennisBall /> },
    { id: "padel", label: "Padel", icon: <GiTennisBall /> },
    { id: "basket", label: "Basketball", icon: <FaBasketballBall /> }
];
