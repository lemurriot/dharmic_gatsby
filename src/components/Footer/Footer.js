import React from 'react';
import './Footer.css';

export default () => {
  // console.log('footer');
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} dharmicastrology.com</span>
      <a href={`tel:+14123815500`} className="footer__phone-contact">
        {/* phone icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="24"
          viewBox="0 0 172 172"
          style={{ fill: '#000000' }}
        >
          <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#ffffff">
              <path d="M134.2675,161.68c-0.05375,0 -0.1075,0 -0.16125,0c-25.85375,-0.84656 -56.14187,-25.9075 -77.01031,-46.78937c-20.89531,-20.88188 -45.95625,-51.18344 -46.7625,-76.91625c-0.29562,-9.03 21.86281,-25.08781 22.09125,-25.24906c5.75125,-4.00438 12.13406,-2.58 14.75438,1.04812c1.77375,2.45906 18.57062,27.90969 20.39812,30.79875c1.89469,2.99656 1.6125,7.45781 -0.7525,11.9325c-1.30344,2.48594 -5.63031,10.09156 -7.65937,13.63906c2.19031,3.1175 7.98187,10.76344 19.94125,22.72281c11.97281,11.95937 19.60531,17.76437 22.73625,19.95469c3.5475,-2.02906 11.15312,-6.35594 13.63906,-7.65937c4.4075,-2.33813 8.84187,-2.63375 11.86531,-0.77938c3.09063,1.89469 28.47406,18.77219 30.81219,20.39813c1.96187,1.38406 3.225,3.74906 3.48031,6.50375c0.24188,2.78156 -0.61812,5.72437 -2.40531,8.29094c-0.14781,0.215 -16.0175,22.10469 -24.96688,22.10469z"></path>
            </g>
          </g>
        </svg>
        <span>(727) 339-0443</span>
      </a>
    </footer>
  );
};
