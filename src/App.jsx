import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persitor, store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomRouterProvider from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persitor}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <CustomRouterProvider />
      </PersistGate>
    </Provider>
  );
}

export default App;
