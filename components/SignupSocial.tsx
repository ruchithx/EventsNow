"use client";
import { da } from "date-fns/locale";
import { signIn } from "next-auth/react";
import React from "react";

export default function SignupSocial() {
  async function handleGoogleBtn() {
    signIn("google");
  }
  return (
    <div className="  justify-center ">
      <div className="grid grid-cols-12 my-8">
        <div className="h-[1px] bg-black self-center col-span-5"></div>
        <div className="  text-center font-serif sm:text-[16px] font-normal col-span-2 ">
          OR
        </div>
        <div className="h-[1px] bg-black self-center col-span-5"></div>
      </div>
      <div className="grid grid-cols-2 justify-items-center">
        <button
          onClick={() => signIn("facebook")}
          className="mx-3 mb-3 mt-4 justify-self-end hover:bg-custom-lightorange rounded-[10px] border-solid border-[#D7CFC7] border-[1px]"
        >
          <div className="flex">
            <svg
              className="self-center my-1 ml-4 mr-3"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Social Icons">
                <path
                  id="Vector"
                  d="M36.4325 18.4236C36.4084 8.48252 28.33 0.442207 18.3889 0.465071C8.44776 0.487935 0.408474 8.56531 0.4326 18.5064C0.454403 27.4906 7.05476 34.9222 15.6632 36.2528L15.6327 23.6746L11.0624 23.6851L11.0498 18.482L15.6201 18.4715L15.6104 14.5059C15.5995 9.99464 18.2808 7.49659 22.3923 7.48713C24.361 7.4826 26.4224 7.82943 26.4224 7.82943L26.4331 12.2591L24.1635 12.2643C21.9275 12.2695 21.2334 13.6587 21.2369 15.0836L21.245 18.4585L26.2372 18.4471L25.4518 23.652L21.2577 23.6617L21.2882 36.2398C29.8901 34.8697 36.4543 27.4078 36.4325 18.4236Z"
                  fill="#1877F2"
                />
                <path
                  id="Vector_2"
                  d="M25.4519 23.652L26.2373 18.4471L21.2451 18.4586L21.2369 15.0836C21.2335 13.6601 21.9276 12.2695 24.1635 12.2643L26.4332 12.2591L26.4224 7.82945C26.4224 7.82945 24.3618 7.48263 22.3923 7.48716C18.2808 7.49661 15.5995 9.99466 15.6105 14.5059L15.6201 18.4715L11.0498 18.482L11.0624 23.6851L15.6327 23.6746L15.6633 36.2528C17.5276 36.5401 19.4253 36.5357 21.2883 36.2399L21.2577 23.6617L25.4519 23.652Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_256_613">
                  <rect
                    width="36"
                    height="36"
                    fill="white"
                    transform="matrix(0.999997 -0.00229994 0.00242687 0.999997 0.388916 0.50647)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="font-serif text-base font-normal text-center self-center mr-10 	">
              Facebook
            </div>
          </div>
        </button>

        <button
          onClick={() => handleGoogleBtn()}
          className="mx-3 mb-3 mt-4 justify-self-start hover:bg-custom-lightorange rounded-[10px] border-solid border-[#D7CFC7] border-[1px]"
        >
          <div className="flex">
            <svg
              className="self-center my-1 ml-4 mr-3"
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Vector">
                <path
                  id="Vector_2"
                  d="M18.4141 15.5225L18.431 22.4934L28.1182 22.4711C27.6983 24.7139 26.4263 26.6151 24.5149 27.8958L30.3677 32.4151C33.7637 29.2656 35.7162 24.6465 35.7029 19.1647C35.6998 17.8884 35.5823 16.6612 35.3666 15.4837L18.4141 15.5225Z"
                  fill="#4285F4"
                />
                <path
                  id="Vector_3"
                  d="M8.34257 22.2444L7.02748 23.256L2.37259 26.8994C5.34865 32.7671 11.4289 36.8113 18.4652 36.7951C23.3251 36.784 27.3957 35.171 30.3673 32.4151L24.5145 27.8958C22.9135 28.9795 20.8696 29.6388 18.4479 29.6443C13.7679 29.6551 9.78402 26.5061 8.34995 22.2548L8.34257 22.2444Z"
                  fill="#34A853"
                />
                <path
                  id="Vector_4"
                  d="M2.3336 10.765C1.11227 13.1895 0.415341 15.9239 0.42241 18.8365C0.429479 21.7492 1.13967 24.4804 2.37275 26.8993C2.37279 26.9155 8.35065 22.2382 8.35065 22.2382C7.98803 21.1591 7.77247 20.0142 7.76957 18.8195C7.76667 17.6248 7.97667 16.4789 8.33405 15.3981L2.3336 10.765Z"
                  fill="#FBBC05"
                />
                <path
                  id="Vector_5"
                  d="M18.3956 7.96256C21.0466 7.95647 23.4051 8.86738 25.2912 10.6303L30.4332 5.46403C27.3007 2.55855 23.2383 0.78414 18.3782 0.795318C11.3419 0.811501 5.28094 4.86726 2.33343 10.765L8.3337 15.3985C9.74693 11.1406 13.7157 7.97333 18.3956 7.96256Z"
                  fill="#EA4335"
                />
              </g>
            </svg>

            <div className="font-serif text-base font-normal text-center self-center mr-[58px] 	">
              Google
            </div>
          </div>
        </button>
      </div>
      {/* handlegoogle */}
      <div className="grid mt-2 mb-5">
        <button
          onClick={() => signIn()}
          className="justify-self-center   hover:bg-custom-lightorange rounded-[10px] border-solid border-[#D7CFC7] border-[1px]"
        >
          <div className="flex">
            <svg
              className="self-center my-1 ml-4 mr-3"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Social Icons">
                <path
                  id="Vector"
                  d="M32.7909 28.7668C32.2495 30.0258 31.6079 31.1851 30.8638 32.2512C29.8496 33.7046 29.0187 34.7109 28.3779 35.2702C27.3846 36.188 26.3191 36.6593 25.177 36.6886C24.357 36.6905 23.3676 36.4594 22.2154 35.9888C21.0594 35.5203 19.9975 35.2894 19.0271 35.2917C18.0094 35.294 16.9184 35.5298 15.752 36.0036C14.5839 36.4796 13.6425 36.7284 12.9224 36.7545C11.8272 36.8037 10.7343 36.324 9.64208 35.3132C8.94508 34.7082 8.07259 33.6702 7.02683 32.1993C5.90482 30.6286 4.9811 28.8064 4.25585 26.7281C3.47909 24.4833 3.08716 22.3087 3.08205 20.2025C3.07619 17.7899 3.59246 15.7079 4.63241 13.9618C5.44965 12.5593 6.53871 11.4519 7.90314 10.6377C9.26757 9.82347 10.743 9.40676 12.3328 9.37666C13.2028 9.37466 14.3443 9.64113 15.7633 10.1667C17.1783 10.6941 18.0867 10.9612 18.4847 10.9602C18.7823 10.9596 19.7899 10.6426 21.4979 10.0113C23.1131 9.42586 24.4769 9.18184 25.5949 9.27416C28.6242 9.51163 30.9026 10.7004 32.4211 12.8479C29.7163 14.4954 28.3819 16.7973 28.4158 19.7463C28.4458 22.0432 29.2837 23.9528 30.9251 25.4668C31.669 26.1695 32.4992 26.712 33.4223 27.0966C33.2238 27.677 33.014 28.233 32.7909 28.7668ZM25.7781 1.44817C25.7825 3.24858 25.1288 4.93112 23.8215 6.49009C22.2438 8.34344 20.3327 9.4167 18.257 9.25281C18.2301 9.03688 18.2142 8.80959 18.2136 8.57071C18.2094 6.84232 18.9573 4.99087 20.2898 3.47541C20.9551 2.70812 21.8019 2.06946 22.8296 1.55917C23.855 1.05647 24.8254 0.77754 25.7386 0.728056C25.7658 0.968681 25.7775 1.20936 25.7781 1.44815L25.7781 1.44817Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_256_616">
                  <rect
                    width="36"
                    height="36"
                    fill="white"
                    transform="matrix(0.999997 -0.00229994 0.00242687 0.999997 0.0349121 0.786743)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="font-serif text-base font-normal text-center self-center mr-12 	">
              AppleId
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
