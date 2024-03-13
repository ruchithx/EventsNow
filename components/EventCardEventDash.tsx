"use client";
import Image from "next/image";

interface EventCardEventDash {
  img: string;
  name: string;
  location: string;
  date: string;
  time: string;
  buttonName: string;
}

function organizationRedirectHandler() {}
function eventShareHandler() {}
function eventViewHandler() {}

function EventCardEventDash({
  img,
  name,
  location,
  date,
  time,
  buttonName,
}: EventCardEventDash) {
  const values1 = name.length > 12 ? "mb-4" : "mb-8";
  const values2 = name.length > 12 ? "" : "mt-4";
  const values3 = name.length > 12 ? "mt-5" : "";
  return (
    <div className="m-10 grid grid-cols-3 w-761 rounded-[10px] bg-[#D9D9D9]">
      <div className="col-span-1 h-60 overflow-hidden rounded-l-lg">
        <Image
          className="object-center"
          src={`/${img}`}
          width={256}
          height={301}
          alt="event picture"
        />
      </div>

      <div className={`col-span-2 grid grid-rows-9  ${values1} ml-5`}>
        <div
          className={` ml-2 ${values2} font-mono text-[#353535] text-2xl font-bold grid grid-cols-3	`}
        >
          <div className="col-span-1">{name}</div>
          <div className="col-span-1">
            <button
              onClick={() => organizationRedirectHandler()}
              className={` hover:bg-[#676C9B] font-mono w-[146px] h-[30px] rounded-[29px] text-white bg-[#4E5381] text-[13px] font-medium ${values3}`}
            >
              <div className="justify-center flex gap-3">
                <svg
                  className="my-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Send_fill">
                    <path
                      id="Subtract"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.93935 12.6465L7.69211 11.8974L7.69211 11.8974L7.6921 11.8974C5.3389 11.113 4.16229 10.7208 4.16229 10C4.16229 9.27925 5.3389 8.88704 7.69212 8.10264L16.2053 5.26491C17.8611 4.71299 18.689 4.43702 19.126 4.87404C19.563 5.31105 19.287 6.13895 18.7351 7.79474L15.8974 16.3079L15.8974 16.3079L15.8974 16.3079C15.113 18.6611 14.7208 19.8377 14 19.8377C13.2793 19.8377 12.8871 18.6611 12.1026 16.3079L11.3536 14.0607L15.7071 9.70711C16.0976 9.31659 16.0976 8.68342 15.7071 8.2929C15.3166 7.90237 14.6834 7.90237 14.2929 8.2929L9.93935 12.6465Z"
                      fill="white"
                    />
                  </g>
                </svg>

                <div className="my-auto">{buttonName}</div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/images/reusableComponents/location1.svg"
            width={32}
            height={32}
            alt="event picture"
          />
          <div className="ml-5 my-auto mystyle font-mono text-[#353c4e] font-normal	text-[16px]	">
            {location}
          </div>
        </div>

        <div className="flex">
          <Image
            src="/images/reusableComponents/Calander.svg"
            width={32}
            height={32}
            alt="event picture"
          />
          <div className="ml-5 my-auto mystyle font-mono text-[#353c4e] font-normal	text-[16px]	">
            {date}
          </div>
        </div>

        <div className="flex grid grid-cols-2">
          <div className=" flex">
            <Image
              src="/images/reusableComponents/Time.svg"
              width={32}
              height={32}
              alt="event picture"
            />
            <div className="ml-5 my-auto font-mono text-[#353c4e] font-normal	text-[16px]	">
              {time}
            </div>
          </div>
          <div className="flex gap-3 my-auto">
            <button
              onClick={() => eventShareHandler()}
              className="w-[86px] h-[30px] rounded-[29px] bg-white"
            >
              <div className="flex gap-3">
                <svg
                  className="my-auto ml-2"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M12.5 10.6024C11.8667 10.6024 11.3 10.8283 10.8667 11.1822L4.925 8.05723C4.96667 7.88404 5 7.71084 5 7.53012C5 7.3494 4.96667 7.1762 4.925 7.00301L10.8 3.90813C11.25 4.28464 11.8417 4.51807 12.5 4.51807C13.8833 4.51807 15 3.50904 15 2.25904C15 1.00904 13.8833 0 12.5 0C11.1167 0 10 1.00904 10 2.25904C10 2.43976 10.0333 2.61295 10.075 2.78614L4.2 5.88102C3.75 5.50452 3.15833 5.27108 2.5 5.27108C1.11667 5.27108 0 6.28012 0 7.53012C0 8.78012 1.11667 9.78916 2.5 9.78916C3.15833 9.78916 3.75 9.55572 4.2 9.17922L10.1333 12.3117C10.0917 12.4699 10.0667 12.6355 10.0667 12.8012C10.0667 14.0136 11.1583 15 12.5 15C13.8417 15 14.9333 14.0136 14.9333 12.8012C14.9333 11.5889 13.8417 10.6024 12.5 10.6024Z"
                    fill="#535353"
                  />
                </svg>

                <div className="font-[roboto_mono] text-[#535353] font-medium">
                  Share
                </div>
              </div>
            </button>

            <button
              onClick={() => eventViewHandler()}
              className="w-[99px] h-[30px] rounded-[29px] bg-white"
            >
              <div className="flex">
                <svg
                  className="my-auto ml-2"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="View_alt">
                    <circle
                      id="Ellipse 65_light"
                      cx="11"
                      cy="11"
                      r="1"
                      stroke="#535353"
                      stroke-width="1.66667"
                    />
                    <path
                      id="Ellipse 66_light"
                      d="M16.6814 10.381C16.8111 10.6311 16.8759 10.7561 16.8759 11C16.8759 11.2439 16.8111 11.3689 16.6814 11.619C16.0844 12.7702 14.4425 15.125 11 15.125C7.55746 15.125 5.91559 12.7702 5.31859 11.619C5.18891 11.3689 5.12407 11.2439 5.12407 11C5.12407 10.7561 5.18891 10.6311 5.31859 10.381C5.91559 9.22976 7.55745 6.875 11 6.875C14.4425 6.875 16.0844 9.22976 16.6814 10.381Z"
                      stroke="#535353"
                      stroke-width="2"
                    />
                    <path
                      id="Vector"
                      d="M15.5833 3.66666V3.66666C17.2453 3.66666 18.0763 3.66666 18.6175 4.15118C18.6695 4.19777 18.7189 4.24718 18.7655 4.2992C19.25 4.84032 19.25 5.67132 19.25 7.33332V7.33332M15.5833 18.3333V18.3333C17.2453 18.3333 18.0763 18.3333 18.6175 17.8488C18.6695 17.8022 18.7189 17.7528 18.7655 17.7008C19.25 17.1597 19.25 16.3287 19.25 14.6667V14.6667M6.41667 3.66666V3.66666C4.75466 3.66666 3.92366 3.66666 3.38255 4.15118C3.33052 4.19777 3.28111 4.24718 3.23453 4.2992C2.75 4.84032 2.75 5.67132 2.75 7.33332V7.33332M6.41667 18.3333V18.3333C4.75466 18.3333 3.92366 18.3333 3.38255 17.8488C3.33052 17.8022 3.28111 17.7528 3.23453 17.7008C2.75 17.1597 2.75 16.3287 2.75 14.6667V14.6667"
                      stroke="#535353"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>

                <div className="font-[roboto_mono] text-[#535353] font-medium mr-2 ml-1">
                  Preview
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCardEventDash;
