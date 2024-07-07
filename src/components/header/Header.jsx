import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="container_header">
        <div className="main_cont">
          <div className="left_container">
            <h2>Are You Starving?</h2>
            <p>Within a few clicks, find meals that are accessible near you</p>
          </div>
          <div className="right_container">
            <video loop autoPlay>
              <source src="https://cdn.dribbble.com/users/319371/screenshots/11984807/media/05cad6c3ffff65f9142bf2958b941171.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
      <a href="#menu">
        <button>View menu</button>
      </a>
    </div>
  );
}

export default Header;
