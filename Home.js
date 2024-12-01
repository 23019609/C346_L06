import React from "react";
import {
    StatusBar,
    Button,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { datasource } from "./Data.js";

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: "left",
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
});

// navigation is passed as a prop, not the same as the Navigation function
const Home = ({ navigation }) => {
    // index returns index position of item
    // section returns section title, e.g., consonant, vowel
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() =>
                    navigation.navigate("Edit", {
                        // pass parameters to Edit
                        index: index,
                        type: section.title,
                        key: item.key,
                    })
                }
            >
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ margin: 20 }}>
            <StatusBar />
            <Button
                title="Add Letter"
                onPress={() => {
                    navigation.navigate("Add");
                }}
            />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text
                        style={[
                            styles.headerText,
                            { backgroundColor: bgcolor, marginTop: 30 },
                        ]}
                    >
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default Home;
