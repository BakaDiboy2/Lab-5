# Laboratory 5 - React State & Hooks

## Problem
Create a Lab Timer and Practice Tracker using React Native.
The app tracks solved practice problems and elapsed time.

## Components
- LabScreen: Owns the solved count and timer running state.
- PracticeTracker: Displays the solved count and provides
  Solve +1 and Reset buttons.
- Stopwatch: Displays elapsed time and the timer status.
- useStopwatch: A custom hook that manages the timer using
  useState, useEffect, setInterval, and cleanup.

## Concepts Used
- useState for managing state
- useEffect for timer side effects
- clearInterval for cleanup
- Conditional rendering
- Event handling with onPress
- Lifting state up
- Custom hooks
- Props between components

## How to Run
1. Install Node.js.
2. Create an Expo project.
3. Replace App.js with the provided code.
4. Run this command:

   npx expo start

5. Open the app in Expo Go or an emulator.