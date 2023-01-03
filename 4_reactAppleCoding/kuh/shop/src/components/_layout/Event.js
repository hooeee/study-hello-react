export function Event() {
  return (
    <div>
      <h2>Etc site</h2>
      <div className="btn-main">
        <button className="btn-deco">
          <Link className="btn-link" to="/etc-site/one">
            Blog
          </Link>
        </button>
        <button className="btn-deco">
          <Link className="btn-link" to="/etc-site/two">
            Event 2
          </Link>
        </button>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
