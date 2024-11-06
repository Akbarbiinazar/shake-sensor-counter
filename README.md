# Shake Counter Detection App

## Description

This app uses the device's accelerometer to detect shake events and count them. It is built with React, Vite, and TypeScript. The shake detection logic works by calculating the total acceleration based on the x, y, and z values of the accelerometer. If the total acceleration exceeds a threshold of 15 m/s², a shake is detected.

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Install all the necessary dependencies:
   ```bash
   pnpm i or npm i
   ```
3. Run the project:
  ```bash
  pnpm run or npm run 
  ```

## Shake Detection Logic
This project implements a custom React hook, `useDeviceShakeSensor`, to detect device shake events using the built-in Accelerometer API. The hook tracks device motion and counts the number of shake events based on the total acceleration detected.

