import React from 'react';
import { Modal, View, Text, Button, StyleSheet, Image } from 'react-native';

const placeDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image style={styles.placeImage} source={props.selectedPlace.image} />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return(
        <Modal onRequestClose={props.onModalClosed} visible={ props.selectedPlace !== null } animationType="slide">
            <View style={styles.modelContainer} >{modalContent}
                <Button title="Delete" color="red" onPress={ props.onItemDeleted } />
                <Button title="Close" onPress={props.onModalClosed}/>
            </View>
        </Modal>
        );
};

const styles = StyleSheet.create({
    modelContainer: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    placeImage: {
        width: "100%",
        height: 200,
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    }

});
export default placeDetail;