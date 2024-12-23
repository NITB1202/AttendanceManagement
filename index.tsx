/**
 *  @format
 */
import { AppRegistry } from "react-native";
import App from "./app"; // Import App component chính
import appConfig from "./app.json"; // Import toàn bộ file JSON

const appName = appConfig.expo.name; // Truy cập thuộc tính name từ app.json

AppRegistry.registerComponent(appName, () => App);
