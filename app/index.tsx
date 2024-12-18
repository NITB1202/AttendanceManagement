import { Dimensions, Image, Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../component/Input";
import PasswordInput from "../component/PasswordInput";
import RoundedButton from "../component/RoundedButton";
import CheckBox from "../component/CheckBox";


export default function Index() {
  const [fontsLoaded] = useFonts({Roboto_700Bold});
  if (!fontsLoaded) return null;

  const { width } = Dimensions.get('window');
  const isMobileView = width < 480;
  const containerStyle = isMobileView? [styles.partContainer, { flex: 1 }] : styles.partContainer;
  
  return (
    <SafeAreaView style={styles.cotainer}>
      <View style={styles.partContainer}>
        <View style={styles.formCotainer}>
          <Text style={styles.header}>SIGN IN</Text>
          <View style={styles.inputContainer}>
            <Input title="Email" placeHolder="Enter your email..."></Input>
            <PasswordInput title="Password" placeHolder="Enter your password..."></PasswordInput>
            <View style={styles.bottom}>
              <View style={styles.checkBoxContainer}>
                <CheckBox onPress={(isChecked)=>{}}></CheckBox>
                <Text style={styles.text}>Remember me</Text>
              </View>
              <TouchableHighlight>
                  <Text style={styles.highlight}>Forgot password?</Text>
              </TouchableHighlight>
            </View>
          </View>
          <RoundedButton title="SIGN IN" onPress={()=>{}}></RoundedButton>
        </View>
      </View>
      { !isMobileView && 
        <View style={styles.partContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.formatImage} source={require('../assets/images/Login.png')} resizeMode="contain"></Image>
          </View>
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cotainer:{
    flex: 1,
    flexDirection: "row"
  },
  partContainer:{
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  header:{
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    textAlign: "center"
  },
  inputContainer:{
    gap: 15
  },
  checkBoxContainer:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  text:{
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
  },
  formCotainer:{
    gap: 40,
    width: 400,
    paddingBottom: 100
  },
  highlight:{
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: Colors.primary
  },
  bottom:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  formatImage:{
    width: "100%",
    height: "100%"
  },
  imageContainer:{
    width: "80%",
    height: "80%",
    overflow: "hidden"
  }
});