import { useEffect, useState } from "react";

const useDevices = () => {
  const [isMobile, setMobile] = useState(false);

  const onResize = () => {
    setMobile(window?.innerWidth <= 450);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { isMobile };
};

export default useDevices;
