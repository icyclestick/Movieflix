import {Stack} from "expo-router";
import "./globals.css";
import {StatusBar} from "react-native";

export default function RootLayout() {
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="movies/[id]" options={{headerShown: false}}/>
            </Stack>
        </>
    );
}
