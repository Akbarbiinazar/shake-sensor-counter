import { useDeviceShakeSensor } from "../hooks/useDeviceShakeSensor";
import Text from "./ui/Text";

const ShakeCounter = () => {
  const { error, isShaking, shakeCount, resetCounter } = useDeviceShakeSensor({
    frequency: 60,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      {error ? (
        <Text variant="error" className="text-xl">
          {error}
        </Text>
      ) : (
        <>
          <div
            className={`${
              isShaking ? "animate-shake bg-teal-300" : "bg-teal-200"
            } w-40 h-40 flex items-center justify-center rounded-full transition-all duration-300`}
          >
            <span className="text-4xl font-bold text-teal-900">
              {shakeCount}
            </span>
          </div>
          <Text variant="normal" className="mt-4 text-lg">
            Shakes detected
          </Text>
          <button
            onClick={resetCounter}
            className="mt-6 btn bg-teal-600 hover:bg-teal-700"
          >
            Reset Counter
          </button>
          {/* <button
            onClick={requestPermission}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Enable Accelerometer
          </button> */}
        </>
      )}
    </div>
  );
};

export default ShakeCounter;
