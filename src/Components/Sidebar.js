import "./Sidebar.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <div className="sideBarTitle">ABOUT ME</div>
        <img
          className="sideBarImg"
          src="https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          sunt itaque labore eaque voluptates
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItems">LIFE</li>
          <li className="sideBarListItems">MUSIC</li>
          <li className="sideBarListItems">STYLE</li>
          <li className="sideBarListItems">TECH</li>
          <li className="sideBarListItems">CINEMA</li>
          <li className="sideBarListItems">SPORTS</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-facebook-square"></i>
          <i className="sideBarIcon fa-brands fa-twitter-square"></i>
          <i className="sideBarIcon fa-brands fa-instagram-square"></i>
          <i className="sideBarIcon fa-brands fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}
