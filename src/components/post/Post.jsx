import "./post.css";
import yaprak from "../images/yaprak.jpg";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={yaprak} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        maxime, consequatur totam veritatis sunt recusandae culpa exercitationem
        dolore, vero consequuntur labore impedit, accusantium excepturi et
        placeat quaerat architecto earum tempora!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        maxime, consequatur totam veritatis sunt recusandae culpa exercitationem
        dolore, vero consequuntur labore impedit, accusantium excepturi et
        placeat quaerat architecto earum tempora!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        maxime, consequatur totam veritatis sunt recusandae culpa exercitationem
        dolore, vero consequuntur labore impedit, accusantium excepturi et
        placeat quaerat architecto earum tempora!
      </p>
    </div>
  );
}
