import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import profile from "../../components/images/profile.jpg";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src={profile} alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label > Username</label>
          <input type="text" placeholder="User" />
          <label > Email</label>
          <input type="email" placeholder="User@gmail.com" />
          <label > Password</label>
          <input type="password"  />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div> 
  );
}
