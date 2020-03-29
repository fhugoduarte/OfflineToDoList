import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#393e46',
    borderRadius: 10,
    flexDirection: 'row',
  },

  checkButton: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  borderIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#00adb5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
  },

  title: {
    color: '#f9f7f7',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 40,
  },

  description: {
    color: '#c9d6df',
    fontSize: 13,
    fontWeight: 'bold',
  },

  deleteButton: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
});
