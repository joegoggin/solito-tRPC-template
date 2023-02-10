import { NativeNavigation } from "app/navigation/native";
import { Provider } from "app/provider";

const App = () => {
	return (
		<Provider>
			<NativeNavigation />
		</Provider>
	);
};

export default App;
