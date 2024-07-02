
import UserInfo from "./UserInfo";

const MySidebar = () => {
  return (
    <nav className="w-[300px] flex flex-col border-r-2 border-gray-400 min-h-screen p-2">
      <div>
        <UserInfo/>
      </div>
      <div className="grow">Menu</div>
      <div>Settings</div>
    </nav>
  );
}

export default MySidebar;
