import React, { useState } from "react";
import { TextInput, View, Text, Button, Alert } from "react-native";
import { datasource } from "./Data.js";

function Edit({ navigation, route }) {
    // access passed parameter, key (letter of list item), from home screen
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={{ margin: 20 }}>
            <Text style={{ paddingBottom: 5 }}>Letter:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                maxLength={1}
                onChangeText={(text) => setLetter(text)}
                value={letter}
            />

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="Save"
                        onPress={() => {
                            // new temp variable with a default value of 1
                            let indexnum = 1;
                            // if type is vowels instead, set to 0
                            // access passed parameter, type, from home screen
                            if (route.params.type === "Vowels") {
                                indexnum = 0;
                            }
                            // change letter value of list item to the edited value
                            // access passed parameter, index, from home screen
                            datasource[indexnum].data[route.params.index].key =
                                letter;
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.type === "Vowels") {
                                indexnum = 0;
                            }

                            // confirmation alert
                            Alert.alert("Are you sure?", "", [
                                {
                                    text: "Yes",
                                    onPress: () => {
                                        // calls array method of splice() to remove item
                                        // splice() parameters --> position to start removing at and number of items to remove
                                        datasource[indexnum].data.splice(
                                            route.params.index,
                                            1,
                                        );
                                        navigation.navigate("Home");
                                    },
                                },
                                // closes the alert on click
                                { text: "No" },
                            ]);
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export default Edit;
