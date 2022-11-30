import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
      },
      companyName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#91A8D0',
        textAlign:'center',
        marginTop: 15
      },
      formContent: {
        flexDirection: 'row',
        marginTop: 30,
      },
      inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
      },
      icon: {
        width: 30,
        height: 30,
      },
      iconBtnSearch: {
        alignSelf: 'center',
      },
      inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
      },
      inputIcon: {
        marginLeft: 15,
        justifyContent: 'center',
      },
      notificationList: {
        marginTop: 20,
        padding: 10,
      },
      card: {
        height: null,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        borderTopWidth: 40,
        marginBottom: 20,
      },
      cardContent: {
        flexDirection: 'row',
        marginLeft: 10,
      },
      imageContent: {
        marginTop: -10,
      },
      tagsContent: {
        marginTop: 10,
        flexWrap: 'wrap',
      },
      image: {
        width: 60,
        height: 60,
        borderRadius: 30,
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'center',
        color:"#383b38"
      },
      btnColor: {
        padding: 10,
        borderRadius: 40,
        marginHorizontal: 3,
        backgroundColor: 'grey',
        marginTop: 5,
      },
})
