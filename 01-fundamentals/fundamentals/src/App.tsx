// import { BasicFunctions } from './typescript/BasicFunctions'
// import { ObjectLiteral } from './typescript/ObjectLiteral'
// import { BasicTypes } from './typescript/BasicTypes'

// import { LoginPage } from "./component/LoginPage"
// import { UsersPAge } from "./component/UsersPage";
import { AuthProvider } from "./context/AuthContext";

// import { Counter } from "./component/Counter"
import { FormsPage } from "./component/FormsPage";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiteral /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage/> */}
        {/* <UsersPAge /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  );
}

export default App;
