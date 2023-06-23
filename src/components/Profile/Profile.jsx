import "./Profile.css";

function Profile({ userObject }) {
  const coverImg = userObject.coverImg ?? "src/assets/cover-placeholder.png";
  // default user Avatar to be added
  const userAvatar = userObject.avatar ?? null;

  return (
    <div className="profile-page">
      <img src={coverImg} alt="cover image"></img>

      <div className="profile">
        <div className="profile-card">
          <img src={userAvatar} alt="user-avatar"></img>
          <span className="user-screen-name">{userObject.name}</span>
          <div className="socials">
            <div>Twitter</div>
            <div>Twitch</div>
            <div>YouTube</div>
            <div>Facebook</div>
          </div>
        </div>
        <div className="profile-content">
          <div>
            <span className="games-playtime">{userObject.playtime}</span> of
            total playtime
          </div>
          <div>
            <span className="games-completed">{userObject.completed}</span>{" "}
            completed
          </div>
          <div>
            <span className="games-backlog">{userObject.backlog}</span> in
            backlog
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
