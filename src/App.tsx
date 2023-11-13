import FlashCard from "./components/FlashCard";
import FlashCardContainer from "./components/FlashCardContainer";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <MainScreen>
      <FlashCardContainer>
        <FlashCard>Hello WOrld</FlashCard>{" "}
      </FlashCardContainer>
    </MainScreen>
  );
}

export default App;
