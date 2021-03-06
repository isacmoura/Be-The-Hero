import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
        marginTop: 48,
      },
    
      incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold",
        marginTop: 24,
      },
    
      incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: "#737380"
      },

      contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
      },

      heroTitle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#13131a',
          lineHeight: 30,
      },

      heroDescription: {
          fontSize: 15,
          color: '#737380',
          marginTop: 16,
      },

      actions: {
          marginTop: 16,
          justifyContent: 'space-between',
          flexDirection: 'row',
      },

      action: {
          backgroundColor: '#e02041',
          borderRadius: 8,
          height: 58,
          width: '48%',
          justifyContent: 'center',
          alignItems: 'center',
      },

      actionText: {
          color: '#fff',
          fontSize: 15,
          fontWeight: 'bold'
      }

});