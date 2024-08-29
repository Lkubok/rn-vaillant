import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Platform, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "src/ui/theme";

export const CustomTabBar: React.FC<BottomTabBarProps> = (props) => {
  const { colors } = useAppTheme();
  const { state, descriptors, navigation } = props;

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.primary,
        paddingBottom: Platform.OS === "android" ? 0 : 20,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              padding: 10,
            }}
          >
            {options.tabBarIcon?.({
              color: isFocused ? colors.primary : colors.background,
              focused: isFocused,
              size: 24,
            })}
            <Text
              variant="titleSmall"
              style={{
                color: isFocused ? colors.onPrimary : colors.backdrop,
              }}
            >
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
