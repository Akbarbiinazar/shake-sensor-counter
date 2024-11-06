import { useEffect, useState, useCallback } from 'react';

type LinearAcceleration = {
  x: number | null;
  y: number | null;
  z: number | null;
};

type AccelerometerOptions = {
  frequency?: number;
};

const SHAKE_THRESHOLD = 15

export const useDeviceShakeSensor = ({ frequency = 60 }: AccelerometerOptions = {}) => {
  const [linearAcceleration, setLinearAcceleration] = useState<LinearAcceleration>({ x: null, y: null, z: null });
  const [error, setError] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [shakeCount, setShakeCount] = useState<number>(0);

  const handleMotion = useCallback((acl: any) => {
    const { x = 0, y = 0, z = 0 } = acl;
    setLinearAcceleration({ x, y, z });
    
    const totalAcceleration = Math.sqrt(x * x + y * y + z * z);
    if (totalAcceleration > SHAKE_THRESHOLD) {
      setShakeCount((count) => count + 1);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 300);
    }
  }, []);

  useEffect(() => {
    let acl: any;

    if ('Accelerometer' in window) {
      acl = new (window as any).Accelerometer({ frequency });
      acl.addEventListener("reading", () => handleMotion(acl));
     
      acl.start();
    } else {
      setError("Accelerometer is not supported on this device.");
    }

    return () => {
      acl?.removeEventListener("reading", handleMotion);
      acl?.stop();
    };
  }, [frequency, handleMotion]);

  const resetCounter = () => setShakeCount(0);

  return { sensors: linearAcceleration, isShaking, error, shakeCount, resetCounter };
};
