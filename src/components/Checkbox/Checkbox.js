import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Checkbox = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <TouchableOpacity onPress={handleCheckboxChange}>
      <View style={styles.checkboxContainer}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && (
            <MaterialIcons name="check" size={20} color="white" />  
          )}
        </View>
        <Text style={styles.label}>Rebamber me</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  checked: {
    backgroundColor: '#FF7722',
  },
  label: {
    color: '#333',
  },
});

export default Checkbox;