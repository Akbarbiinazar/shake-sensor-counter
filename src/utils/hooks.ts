import  { useState,  useCallback } from 'react';

export const useAccelerometerPermission = () => {
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const requestPermission = useCallback(async () => {
    if (typeof (DeviceMotionEvent as any).requestPermission === "function") {
      try {
        const permissionState = await (DeviceMotionEvent as any).requestPermission();
        if (permissionState === "granted") {
          setPermissionGranted(true);
        } else {
          setError("Permission to access accelerometer was denied.");
        }
      } catch {
        setError("Error requesting accelerometer permission.");
      }
    } else if ("DeviceMotionEvent" in window) {
      setPermissionGranted(true);
    } else {
      setError("This device does not support the Accelerometer.");
    }
  }, []);

  return { permissionGranted, requestPermission, error };
};
