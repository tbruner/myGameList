import "./TitleBar.css";

function TitleBar() {
  return (
    <header>
      <nav>
        <div className="nav-brand-search">
          <div className="logo">Logo</div>
          <div className="nav-search">
            <input type="text" placeholder="Search Video Games" />
            <button>Search</button>
          </div>
        </div>
        <div className="login">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default TitleBar;
