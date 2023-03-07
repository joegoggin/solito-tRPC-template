import { Provider } from "app/provider";
import NativeNavigator from "app/navigation/native";

const App = () => {
	return (
		<Provider>
			<NativeNavigator />
		</Provider>
	);
};

export default App;
