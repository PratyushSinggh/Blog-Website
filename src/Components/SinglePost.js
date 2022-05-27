import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/3116969/pexels-photo-3116969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Prats</b>
          </span>
          <span className="singlePostDate">1 Hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          dolores nobis odio perferendis, error distinctio officiis dolorum ex
          reiciendis rerum velit numquam, impedit beatae eaque eveniet non
          consectetur. Blanditiis, veniam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Velit accusantium deleniti ut totam
          tempore. Eaque ratione vitae beatae saepe sapiente, eius reiciendis
          illo, ad, tempore inventore nostrum voluptate itaque? Saepe. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Officia earum
          provident nesciunt a nihil quia omnis ex molestias repudiandae dolor
          officiis, at quibusdam fugiat veniam nostrum necessitatibus? Dolorem,
          perferendis commodi? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Inventore accusamus provident sit ratione rem
          nesciunt iusto iste beatae minus molestiae officia quas, reiciendis
          voluptatem harum eos debitis. Ea, repellendus architecto. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Inventore enim
          consequuntur eveniet velit dolorum, quam perspiciatis tenetur facere
          cupiditate sit? Est dolorum voluptatem nulla facilis nemo quod,
          quibusdam dolore odit!
        </p>
      </div>
    </div>
  );
}
