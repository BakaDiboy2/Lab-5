import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

function useStopwatch(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return seconds;
}

function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Practice Tracker</Text>
      <Text style={styles.counter}>Solved: {solved}</Text>

      {solved >= 5 && (
        <Text style={styles.success}>Great job!</Text>
      )}

      <View style={styles.button}>
        <Button title="Solve +1" onPress={onSolve} />
      </View>

      <View style={styles.button}>
        <Button title="Reset" onPress={onReset} />
      </View>
    </View>
  );
}

function Stopwatch({ seconds, isRunning }) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(remainingSeconds).padStart(2, '0')}`;

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Lab Stopwatch</Text>
      <Text style={styles.timer}>{formattedTime}</Text>

      <Text style={styles.status}>
        {isRunning ? 'Running…' : 'Paused'}
      </Text>
    </View>
  );
}

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved(s => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <View style={styles.button}>
        <Button title="Start" onPress={handleStart} />
      </View>

      <View style={styles.button}>
        <Button title="Stop" onPress={handleStop} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f2f4f8',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
  },
  success: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timer: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  status: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    marginVertical: 5,
  },
});