import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/home/HomeScreen";
import MoreScreen from "../screens/more/MoreScreen";
import QuotesModal from "../screens/modals/QuotesModal";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  MoreScreen: {
    screen: MoreScreen,
  },
};


const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)