import { useEffect } from "react";

function ProfileEdit({ display, edit, user }) {
  const dialog = document.querySelector("dialog");

  useEffect(() => {
    if (display) {
      dialog.showModal();
    }
  }, [display]);

  function closeModal() {
    edit();
    dialog.close();
  }

  return (
    <dialog className="profile-edit-modal">
      <form>
        <label htmlFor="dispaly-name">Display Name:</label>
        <input
          type="text"
          id="display-name"
          name="display-name"
          placeholder={user.name}
        ></input>
        {/*
        <label for="avatar">Upload a new avatar:</label>
        <input type="image" id="avatar" name="avatar"></input>

        <label for="cover-img">Upload a new Cover Image:</label>
        <input type="image" id="cover-img" name="cover-img"></input>
        */}
        <label htmlFor="twitter-link">Your Twitter:</label>
        <input type="url" id="twitter-link" name="twitter-link"></input>

        <label htmlFor="twitch-link">Your Twitch:</label>
        <input type="url" id="twitch-link" name="twitch-link"></input>

        <label htmlFor="youtube-link">Your YouTube:</label>
        <input type="url" id="youtube-link" name="youtube-link"></input>

        <label htmlFor="facebook-link">Your Facebook:</label>
        <input type="url" id="facebook-link" name="facebook-link"></input>

        <button>Submit</button>
        <button onClick={closeModal}>Close</button>
      </form>
    </dialog>
  );
}

export default ProfileEdit;
