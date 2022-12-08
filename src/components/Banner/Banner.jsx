import React from "react";
import BannerImg from "../../assests/banner/banner.jpg";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="banner-img-div overlay">
          <img src={BannerImg} alt="" />
        </div>
        <div className="custom-container banner-desc position-absolute top-0 bottom-0 start-0 end-0">
          <div className="position-relative w-100 h-100">
            <div className="desc-header d-flex w-100 flex-row justify-content-between pt-3">
              <div className="banner-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  class="bi bi-arrow-left-short text-white fw-bold pointer"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
              </div>
              <button
                type="button"
                class="btn btn-outline-white text-white border border-1 border-white"
              >
                Join Group
              </button>
            </div>
            <div className="desc-bottom position-absolute">
              <h2 className="text-white">Computer Engineering</h2>
              <p className="text-white fs-5 fw-lighter">
                142,765 Computer Engineers follow this
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
