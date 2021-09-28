import { useCallback, useEffect, useState } from "react";

export const useDevices = () => {
  const [isMobile, setMobile] = useState(false);

  const handleDevice = () => {
    setMobile(window?.outerWidth <= 450);
  };

  const onResize = useCallback(() => {
    handleDevice();
  }, []);

  useEffect(() => {
    handleDevice();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  return { isMobile };
};
