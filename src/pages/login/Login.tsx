import React, { useState } from 'react';
import { 
    View,
    StyleSheet,  
    Text   
    } from 'react-native';



const LoginForm = () => {
    
    
    

    return (
        <View style={styles.container}>
            <View style={styles.card}>
           
            </View>           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#345e8f',
        borderRadius: 8,
        padding: 16,
        width: 180,
        height: 180,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 20,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },


    });

export default LoginForm;