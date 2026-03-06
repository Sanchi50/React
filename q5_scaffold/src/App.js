import "./styles.css";
// Import the named export
import { ButtonView } from "./ButtonView.js"; 

export default function App() {
  return (
    <div className="App">
      <h3>Button Variants</h3>
      <div>
        <h3>Outlined Button</h3>
        {/* Default state: No props passed */}
        <ButtonView>Outlined</ButtonView>
      </div>
      <div>
        <h3>Filled Button</h3>
        {/* Filled state: Passing props for custom styling */}
        <ButtonView filled bg="cyan" color="red">
          Filled
        </ButtonView>
      </div>
    </div>
  );
}