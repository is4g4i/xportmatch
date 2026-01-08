import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ routes }: { routes: string[] }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (routes.includes(pathname)) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }, [pathname, routes]);

    return null;
};

export default ScrollToTop;
