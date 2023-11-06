import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../Auth/authConfig";

const Header = () => {

  const { instance } = useMsal();

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect().catch((error) => console.log(error));
  };

  return (
    <header className="bg-gray-300 p-4 text-black">
      <div className="flex">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Levvia</h1>
        </div>
        <UnauthenticatedTemplate>
          <div className="flex justify-end w-1/5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLoginRedirect}>Sign In</button>
          </div>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <div className="flex justify-end w-1/5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogoutRedirect}>Log out</button>
          </div>
        </AuthenticatedTemplate>
      </div>

    </header>
  );
};

export default Header;
