// import Work from "./work";
// import Add from "./Add";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <div className="Header-1">
        <div>
          <h2>Achieve your Goals !</h2>
        </div>
        <div>...By Het Savani</div>
        <div id="head3">...List your works here !</div>
      </div>
      {/* <div className="container header">
        <div className="row">
          <div className="col-2">
            <Link to='/Add'>
            <button className="btn Add">
              <div id="mytxtAdd">Add work</div>
            </button>
            </Link>
          </div>
        </div>
      </div> */}
      
      <div className="container mycon">
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
