import "./write.css";
import kugu from '../../components/images/kugu.jpg'

export default function Write() {
  return (
    <div className="write">
    <img className="writeImg" src={kugu} alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-regular fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Add Publish</button>
      </form>
    </div>
  );
}
