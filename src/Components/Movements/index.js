import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Movements({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.date}>{data.date} </Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        <Text style={styles.value}>{data.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#2ecc71',
  },
  date: {
    color: '#dadada',
    fontWeight: 'bold',
  },
});
