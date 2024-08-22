const Navbar = () => {
  return (
    <nav>
      <div className="site-title">
        <a href="/">
          <h1>BlogPost</h1>
        </a>
      </div>
      <ul>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blogs/form">New Blog</a>
        </li>
        <li>
          <a href="/auth/logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
