import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units Enrolled: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}
    </View>
  );
}

export default function StudentRoster() {
  const [students, setStudents] = useState([
    { id: 's1', name: 'Ana Cruz', course: 'IT313', units: 21, isFullLoad: true },
    { id: 's2', name: 'Bea Santos', course: 'IT313', units: 15, isFullLoad: false },
    { id: 's3', name: 'Cid Ramos', course: 'IT313', units: 18, isFullLoad: true },
    { id: 's4', name: 'Dex Alonzo', course: 'IT313', units: 12, isFullLoad: false },
  ]);

  const [useIndexKey, setUseIndexKey] = useState(false);

  const reverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>IT313 Student Roster</Text>
      <Text style={styles.subtitle}>
        Total Students: {students.length}
      </Text>

      <View style={styles.button}>
        <Button title="Reverse Roster" onPress={reverseRoster} />
      </View>

      <View style={styles.button}>
        <Button
          title={useIndexKey ? 'Restore Student ID Keys' : 'Test Index Keys'}
          onPress={() => setUseIndexKey(!useIndexKey)}
        />
      </View>

      {students.map((student, index) => (
        <StudentCard
          key={useIndexKey ? index : student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f4f8',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fullLoad: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 8,
  },
  button: {
    marginVertical: 5,
  },
});