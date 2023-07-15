import "./Profile.css";
import coverImagePlaceholder from "/src/assets/cover-placeholder.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handleUserRequest } from "../../Handles/Handles";
import ProfileEdit from "./ProfileEdit";

function Profile() {
  const [userObj, setUserObj] = useState({
    avatar: null,
    coverImg: coverImagePlaceholder,
    backlog: "0",
    completed: "0",
    name: "user not found",
    playtime: "0hrs",
  });

  const [currentUser, setCurrentUser] = useState(false);
  const [editState, setEditState] = useState(false);

  const { user } = useParams();

  useEffect(() => {
    getUserObj(user);
  }, []);

  async function getUserObj(user) {
    const temp = await handleUserRequest(user);
    if (temp) setUserObj(temp);
  }

  function edit() {
    setEditState(!editState);
  }

  return (
    <div className="profile-page">
      <img src={userObj.coverImg} alt="cover image"></img>

      <div className="profile">
        <div className="profile-card">
          <img src={userObj.avatar} alt="user-avatar"></img>
          <span className="user-screen-name">{userObj.name}</span>
          <button className="edit-profile" onClick={edit}>
            Edit
          </button>
          <div className="socials">
            <div>Twitter</div>
            <div>Twitch</div>
            <div>YouTube</div>
            <div>Facebook</div>
          </div>
        </div>
        <div className="profile-content">
          {currentUser ? <button id="edit-profile">Edit Profile</button> : null}
          <div>
            <span className="games-playtime">{userObj.playtime}</span> of total
            playtime
          </div>
          <div>
            <span className="games-completed">{userObj.completed}</span>{" "}
            completed
          </div>
          <div>
            <span className="games-backlog">{userObj.backlog}</span> in backlog
          </div>
        </div>
      </div>
      <ProfileEdit display={editState} user={userObj} edit={edit} />
    </div>
  );
}

export default Profile;
