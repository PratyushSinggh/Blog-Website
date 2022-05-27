import Header from "./Components/Header";
import "./Home.css";
import Posts from "./Components/Posts";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
