import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212121',
    padding: 20,
  },

  grayText: {
    color: '#c9d6df',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 50,
  },

  greenText: {
    fontSize: 20,
    color: '#0d7377',
    fontWeight: 'bold',
  },

  inputContainer: {
    width: '100%',
  },

  input: {
    backgroundColor: '#00000030',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#77777750',
  },

  registerButton: {
    backgroundColor: '#0d7377',
    paddingVertical: 20,
    marginTop: 30,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerButtonTitle: {
    color: '#c9d6df',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
