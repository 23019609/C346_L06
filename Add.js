import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { datasource } from "./Data.js";

function Add({ navigation }) {
    const [letter, setLetter] = useState("");
    // set default value of type to "Vowels"
    const [type, setType] = useState("Vowels");

    return (
        <View style={{ margin: 20 }}>
            <Text style={{ paddingBottom: 5 }}>Letter:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                maxLength={1}
                onChangeText={(text) => setLetter(text)}
            />

            <RNPickerSelect
                onValueChange={(value) => {
                    setType(value);
                }}
                items={[
                    { label: "Vowels", value: "Vowels" },
                    { label: "Consonants", value: "Consonants" },
                ]}
                value={type}
            />

            <View style={{ marginTop: 10 }}>
                <Button
                    title="Submit"
                    onPress={() => {
                        // creates a new temp JSON object, whereby value of key is letter from TextInput
                        let item = { key: letter };
                        let indexnum = 1;
                        // datasource[0] --> Vowels, datasource[1] --> Consonants
                        if (type === "Vowels") {
                            indexnum = 0;
                        }
                        // based on the valye of picker select, the new JSON obj gets added to the appropriate section of datasource
                        datasource[indexnum].data.push(item);
                        // navigate / redirect back to home screen
                        navigation.navigate("Home");
                    }}
                />
            </View>
        </View>
    );
}

export default Add;
