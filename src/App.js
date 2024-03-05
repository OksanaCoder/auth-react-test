import "./App.css";
import Logo from "./components/Logo";
import FormLogin from "./components/FormLogin";

import Register from "./components/ResetForm";

function App() {
  return (
    <div className="container-main">
      <Logo />

      <FormLogin />
      {/* <ForgotPassword /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
