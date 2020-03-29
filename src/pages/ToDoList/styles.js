import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212121',
  },

  toDoList: {
    width: '100%',
  },

  toDoListContainer: {
    width: '100%',
    padding: 20,
    paddingBottom: 120,
  },

  itemSeparator: {
    width: 1,
    height: 20,
  },

  newToDoButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#0d7377',
    paddingTop: 2,
    right: 20,
    bottom: 40,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
