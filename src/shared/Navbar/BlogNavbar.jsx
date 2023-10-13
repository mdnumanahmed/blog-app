import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
const BlogNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo Image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex mx-auto">
            <div className="input-group">
                <div className="input-group-prepend" style={{position: 'relative', left:'30px', top:'7px', zIndex:'5'}}>
                  <i className="classes you have">
                    <FaSearch />
                  </i>
                </div>
                <input
                  style={{
                    width: "360px",
                    height: "42px",
                    borderRadius: "21px",
                    paddingLeft:'40px'
                  }}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for your favorite groups in ATG"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success d-none" type="submit">
                  Search
                </button>
            </div>
              </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <a href="#" className="text-decoration-none fw-bold text-reset">Create account. <span className="text-primary">It’s free!</span></a>
            </ul>
            <IoMdArrowDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BlogNavbar;
