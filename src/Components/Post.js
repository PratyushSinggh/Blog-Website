import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/3116969/pexels-photo-3116969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr />
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro esse
        illo dignissimos quo blanditiis tempore fuga exercitationem! Accusantium
        possimus sapiente ullam eum totam minima cupiditate excepturi fuga porro
        nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        porro esse illo dignissimos quo blanditiis tempore fuga exercitationem!
        Accusantium possimus sapiente ullam eum totam minima cupiditate
        excepturi fuga porro nemo. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quod porro esse illo dignissimos quo blanditiis
        tempore fuga exercitationem! Accusantium possimus sapiente ullam eum
        totam minima cupiditate excepturi fuga porro nemo.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quod porro esse illo dignissimos quo
        blanditiis tempore fuga exercitationem! Accusantium possimus sapiente
        ullam eum totam minima cupiditate excepturi fuga porro nemo.
      </p>
    </div>
  );
}
