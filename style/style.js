import { StyleSheet } from 'react-native';


export default StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    fontSize: 20,
    marginBottom: 15,
    backgroundColor: '#ff6f3c',
    flexDirection: 'row',
    textAlign: 'center',
    borderRadius: 15,
    fontFamily : "MadimiOneRegular"
  },
  header1: {
    marginTop: 30,
    fontSize: 20,
    marginBottom: 15,
    flexDirection: 'row',
    fontWeight: 'bold',
    backgroundColor: '#ffc93c',
    textAlign: 'center',
    borderRadius: 15,
    fontFamily : "MadimiOneRegular"
  },
  header2: {
    marginTop: 30,
    fontSize: 20,
    marginBottom: 15,
    flexDirection: 'row',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'orange',
    borderRadius: 15,
    fontFamily : "MadimiOneRegular"
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#ff6f3c',
    flexDirection: 'row',
    fontFamily : "MadimiOneRegular"
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
    fontFamily : "MadimiOneRegular"
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    fontFamily : "MadimiOneRegular"
  },
  input: {
    borderWidth:3,
    borderColor: "#ffc93c",
    fontWeight: 'bold',
    flex: 1,
    height: 100,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily : "MadimiOneRegular"
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily : "MadimiOneRegular"
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    fontFamily : "MadimiOneRegular"
  },
  row: {
    marginTop: 20,
    padding: 10,
    fontFamily : "MadimiOneRegular"
  },
  flex: {
    flexDirection: "row",
    fontFamily : "MadimiOneRegular"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    fontSize: 30,
    backgroundColor: "#ff9a3c",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign :'center',
    fontWeight: 'bold',
    fontFamily : "MadimiOneRegular"
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20,
    fontFamily : "MadimiOneRegular"
  }
});