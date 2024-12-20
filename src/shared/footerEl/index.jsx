"use client";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_content">
          <div className="footer_links">
            <div className="footer_column">
              <h3>Company</h3>
              <span>About Us</span>
              <span>Team</span>
              <span>Careers</span>
              <span>Blog</span>
            </div>
            <div className="footer_column">
              <h3>Products</h3>
              <span>Customized Puja Kits</span>
              <span>Handcrafted Idols and Frames</span>
              <span>Spiritual Books and Scriptures</span>
              <span>Traditional Clothing and Accessories</span>
              <span>Aarti CDs and Digital Downloads</span>
            </div>
            <div className="footer_column">
              <h3>Help & Support</h3>
              <span>FAQs</span>
              <span>Contact Us</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
            <div className="footer_column">
              <h3>Legal</h3>
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
              <span>Cookie Policy</span>
              <span>Data Protection</span>
            </div>
            <div className="footer_column">
              <h3>Explore</h3>
              <span>Our Services</span>
              <span>Partner with Us</span>
              <span>Press</span>
              <span>Investors</span>
            </div>
          </div>

          
          <div className="footer_social">
            <h3>Connect with us</h3>
            <div className="social_icons">
              <FacebookOutlined className="social_icon" />
              <InstagramOutlined className="social_icon" />
              <LinkedinOutlined className="social_icon" />
              <TwitterOutlined className="social_icon" />
            </div>
          </div>
        </div>
        
        <div className="footer_bottom">
          <p>© {new Date().getFullYear()} Urban Company. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};



