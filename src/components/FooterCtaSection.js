import React from "react";

const FooterCTASection = () => {
  return (
    <section className="footer-cta-section">
      <div className="cta-container">
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="514"
          viewBox="0 0 1341 514"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="footer-cta" clipPath="url(#clip0_13_778)">
            <path
              id="back-shape"
              d="M1235.65 496.707L807.336 475.02C716.107 470.418 624.704 470.418 533.475 475.02L105.22 496.707C91.6569 497.391 78.0967 495.31 65.363 490.59C52.6293 485.871 40.9881 478.612 31.1468 469.254C21.3056 459.896 13.4697 448.635 8.1153 436.155C2.76095 423.675 -4.86775e-05 410.237 8.05679e-05 396.657V100.794C-0.0171553 87.2028 2.73123 73.7507 8.07799 61.2559C13.4247 48.7612 21.258 37.485 31.1011 28.1137C40.9442 18.7424 52.5913 11.472 65.3334 6.74494C78.0756 2.01788 91.6463 -0.0669662 105.22 0.617285L533.538 22.4304C624.767 27.0326 716.17 27.0326 807.399 22.4304L1235.65 0.617285C1249.22 -0.0661422 1262.78 2.01466 1275.52 6.73335C1288.26 11.452 1299.9 18.7102 1309.75 28.067C1319.6 37.4239 1327.44 48.6843 1332.8 61.1645C1338.16 73.6447 1340.93 87.0844 1340.94 100.667V396.657C1340.93 410.24 1338.16 423.68 1332.8 436.16C1327.44 448.64 1319.6 459.901 1309.75 469.257C1299.9 478.614 1288.26 485.872 1275.52 490.591C1262.78 495.31 1249.22 497.391 1235.65 496.707Z"
              fill="url(#paint0_linear_13_778)"
            />
            <g id="front-shape" filter="url(#filter0_d_13_778)">
              <path
                id="front"
                d="M1210.49 513.868L801.32 492.959C714.184 488.502 626.881 488.502 539.745 492.959L130.706 513.868C117.733 514.553 104.759 512.559 92.5728 508.006C80.3866 503.453 69.2434 496.438 59.822 487.386C50.4005 478.335 42.8978 467.438 37.7709 455.358C32.644 443.278 30 430.268 30.0001 417.121V131.072C29.9829 117.911 32.6137 104.884 37.7321 92.7856C42.8505 80.6869 50.3493 69.7697 59.7716 60.6993C69.1939 51.6289 80.3424 44.5952 92.5375 40.0271C104.733 35.4589 117.719 33.4518 130.706 34.1281L539.874 55.1032C627.01 59.5604 714.313 59.5604 801.45 55.1032L1210.49 34.1281C1223.45 33.4707 1236.4 35.4858 1248.56 40.051C1260.73 44.6161 1271.84 51.6361 1281.25 60.6845C1290.65 69.7329 1298.13 80.6208 1303.25 92.687C1308.36 104.753 1311 117.746 1311 130.876V417.121C1311.01 430.253 1308.38 443.25 1303.26 455.321C1298.15 467.391 1290.67 478.283 1281.27 487.333C1271.86 496.384 1260.74 503.403 1248.57 507.965C1236.4 512.527 1223.45 514.535 1210.49 513.868Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_13_778"
              x="26"
              y="34"
              width="1289"
              height="488"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_13_778"
              />

              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_13_778"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_13_778"
              x1="40.9655"
              y1="40.2407"
              x2="1211.14"
              y2="664.729"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00FFA2" />
              <stop offset="1" stopColor="#0072FF" />
            </linearGradient>
            <clipPath id="clip0_13_778">
              <rect width="1341" height="514" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="cta-description-container">
          <div className="cta-description">
            <h1>
              Sign up now for
              <span className="green-text">better, faster, and cheaper</span>
              financial services.
            </h1>
          </div>
          <div className="cta-img-container">
            <div className="img-circle">
              <div className="img-container">
                <img src="./images/lady.svg" alt="" />
              </div>
            </div>
            <img src="./images/badge.svg" alt="" className="badge-star" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTASection;
