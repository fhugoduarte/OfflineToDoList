import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212121',
    padding: 20,
  },

  input: {
    backgroundColor: '#00000030',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    color: '#fff',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#77777750',
  },

  filterContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
  },

  filterButton: {
    borderWidth: 1,
    borderColor: '#0d7377',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },

  filterText: {
    color: '#fff',
    fontWeight: 'bold',
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
