import { useEffect, useState } from "react";

export const useDevices = () => {
  const [isMobile, setMobile] = useState(false);

  const onResize = () => {
    setMobile(window?.outerWidth <= 450);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { isMobile };
};
