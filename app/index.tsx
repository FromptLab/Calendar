import { styled } from "@/shared/ui/styled";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: #000;
`;

export default function Index() {
  return (
    <Container>
      <StyledText>루트 페이지</StyledText>
      <TouchableOpacity
        onPress={() => router.push("/(protected)/(tabs)/(home)")}
      >
        <StyledText>보호 페이지로 이동</StyledText>
      </TouchableOpacity>
    </Container>
  );
}
