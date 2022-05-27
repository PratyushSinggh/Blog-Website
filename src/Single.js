import SideBar from "./Components/Sidebar";
import "./Single.css";
import "./Components/Sidebar.css";
import SinglePost from "./Components/SinglePost";

export default function Single() {
  return (
    <div className="single">
      Single
      <SinglePost />
      <SideBar />
    </div>
  );
}
