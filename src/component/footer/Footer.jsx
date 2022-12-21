import { useEffect, useState } from "react";
import { TfiTwitterAlt, TfiYoutube, TfiInstagram } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./footer-style.css";

const Array1 = [
  {
    titile: (
      <Link className="f-link" to="/pageonworking">
        About Us
      </Link>
    ),
  },
  {
    titile: (
      <Link className="f-link" to="/termandcondition">
        Terms and conditions
      </Link>
    ),
  },
  {
    titile: (
      <Link className="f-link" to="/guestpolicy">
        Guest Policies
      </Link>
    ),
  },
  {
    titile: (
      <Link className="f-link" to="/privacypolicy">
        Privacy Policy
      </Link>
    ),
  },
  {
    titile: (
      <Link className="f-link" to="/pageonworking">
        Trust And Safety
      </Link>
    ),
  },
];

const Array2 = [
  {
    titile: (
      <Link className="f-link" to="/pageonworking">
        Investor Relations
      </Link>
    ),
  },
  {
    titile: (
      <Link className="f-link" to="/pageonworking">
        Responsible Disclosure
      </Link>
    ),
  },
  {
    titile: (
      <Link className="f-link" to="/pageonworking">
        Trust And Safety
      </Link>
    ),
  },
  {
    titile: (
      <Link className="f-link" to="/pageonworking">
        Cyber Security Awareness
      </Link>
    ),
  },
];

const Array3 = [
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
  {
    city: (
      <Link className="f-link" to="/pageonworking">
        Hotels in Mumbai
      </Link>
    ),
  },
];

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <section className="footerdiv">
          <div id="footerdiv1">
            <p id="footer-p1">Book My Resort</p>
            <p id="footer-p2">World Leading Chain Of Hotels and Homes</p>
          </div>
          <hr />
        </section>

        <section id="Tc-container">
          <div id="soc-media-icon">
            <TfiTwitterAlt className="footer-icon" />
            <TfiYoutube className="footer-icon" />
            <TfiInstagram className="footer-icon" />
          </div>
          <div className="tc-container-div">
            {Array1.map((item) => {
              return <p className="para-tag">{item.titile}</p>;
            })}
          </div>
          <div id="item-div" className="tc-container-div">
            {Array2.map((item) => {
              return <p className="para-tag">{item.titile}</p>;
            })}
          </div>
        </section>
        <hr />
        <section id="city">
          {Array3.map((items) => {
            return <p className="city-para">{items.city}</p>;
          })}
        </section>
        <hr />
        <section>
          <h4 id="copyright">
            &#169;Copyright Agency and contributors 2022. ABN 53 001 228 799
          </h4>
        </section>
      </footer>
    </>
  );
};
export default Footer;
