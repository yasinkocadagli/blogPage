import "./singlePost.css";
import kugu from "../images/kugu.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={kugu} alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b> NoName</b>{" "}
          </span>
          <span className="singlePostAuthor">1 hour ago </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          laborum a vel culpa, expedita ipsa ut ad dolorem! Repudiandae rerum
          accusantium harum deleniti dolor cupiditate at, iste repellendus
          praesentium quae?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          laborum a vel culpa, expedita ipsa ut ad dolorem! Repudiandae rerum
          accusantium harum deleniti dolor cupiditate at, iste repellendus
          praesentium quae?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          laborum a vel culpa, expedita ipsa ut ad dolorem! Repudiandae rerum
          accusantium harum deleniti dolor cupiditate at, iste repellendus
          praesentium quae?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          laborum a vel culpa, expedita ipsa ut ad dolorem! Repudiandae rerum
          accusantium harum deleniti dolor cupiditate at, iste repellendus
          praesentium quae?
        </p>
      </div>
    </div>
  );
}
