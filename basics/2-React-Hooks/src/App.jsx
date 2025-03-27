import UserProfile from "../componants/UserProfile";
import { UserProvider } from "../componants/UserContext";
import UserSetter from "../componants/UserSetter";
function App() {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <UserSetter />
      </UserProvider>
    </>
  );
}

export default App;
