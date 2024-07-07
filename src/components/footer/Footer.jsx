import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="main_cont_footer">
        <div className="left_footer">
          <h3>Company</h3>
          <ul className='footer_ul'>
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="center_footer">
          <h3>Legal</h3>
          <ul className='footer_ul'>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="right_footer">
          <h3>Follow us</h3>
          <div className="right_footer_logo">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </div>
          <p>Receive exclusive offers in your mailbox</p>
        </div>
      </div>
      <div className="footer_last">
        <p>All rights reserved © FoodCart</p>
      </div>
    </div>
  );
}

export default Footer;
