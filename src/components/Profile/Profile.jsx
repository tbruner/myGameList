import "./Profile.css";
import coverImagePlaceholder from "/src/assets/cover-placeholder.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handleUserRequest, isUserSignedIn } from "../../Handles/Handles";

function Profile() {
  const [userObj, setUserObj] = useState({
    avatar: null,
    coverImg: coverImagePlaceholder,
    backlog: "0",
    completed: "0",
    name: "user not found",
    playtime: "0hrs",
  });

  const { user } = useParams();

  useEffect(() => {
    getUserObj(user);
    console.log("user", isUserSignedIn(user));
  }, []);

  async function getUserObj(user) {
    const temp = await handleUserRequest(user);
    if (temp) setUserObj(await handleUserRequest(user));
  }

  return (
    <div className="profile-page">
      <img src={userObj.coverImg} alt="cover image"></img>

      <div className="profile">
        <div className="profile-card">
          <img src={userObj.avatar} alt="user-avatar"></img>
          <span className="user-screen-name">{userObj.name}</span>
          <div className="socials">
            <div>Twitter</div>
            <div>Twitch</div>
            <div>YouTube</div>
            <div>Facebook</div>
          </div>
        </div>
        <div className="profile-content">
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
    </div>
  );
}

export default Profile;
