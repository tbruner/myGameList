import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <img src="src/assets/cover-placeholder.png" alt="cover image"></img>

      <div className="profile">
        <div className="profile-card">
          <img alt="user-avatar"></img>
          <span className="user-screen-name">User Screen Name</span>
          <div className="socials">
            <div>Twitter</div>
            <div>Twitch</div>
            <div>YouTube</div>
            <div>Facebook</div>
          </div>
        </div>
        <div className="profile-content">
          <div>
            <span className="games-played">0</span> hrs of total playtime
          </div>
          <div>
            <span className="games-played">0</span> completed
          </div>
          <div>
            <span className="games-completed">0</span> in backlog
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
