import React, { useEffect } from "react";
import Input from "../../../components/Input/Input";
import TextArea from "../../../components/TextArea/TextArea";
import "./Contact.scss";

export default function Contact() {
  const handleOnSubmit = (e) => {

    e.preventDefault();
  };
  return (
    <div className="contact container">
      <h1 data-aos="fade-right">LIÊN HỆ</h1>
      <hr data-aos="zoom-in" data-aos-duration="2000" />
      <div className="content">
        <div className="content-left" data-aos="fade-right">
          <span className="content-left-desc">
            Nếu có bất kì câu hỏi nào, hãy để lại lời nhắn cho chúng tôi và
            chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất{" "}
          </span>
          <form className="content-left-form" onSubmit={handleOnSubmit}>
            <Input name="Họ"></Input>
            <Input name="Tên"></Input>
            <Input name="Email"></Input>
            <Input name="Số điện thoại"></Input>
            <TextArea name="Mô tả....."></TextArea>
            <button>GỬI PHẢN HỒI</button>
          </form>
        </div>
        <div className="content-right" data-aos="my-animation" data-aos-delay="500">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4248524312043!2d106.69828971571903!3d10.778736562096277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4805a39fad%3A0xe688d9024150bedc!2zMTY0IMSQ4buTbmcgS2jhu59pLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1659339476112!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <hr data-aos="zoom-in" data-aos-duration="2000" />
      <div className="infomation" data-aos="fade-in" data-aos-delay="300">
        <h2>
          Trang thông tin điện tử Sở Văn hoá và Thể thao Thành phố Hồ Chí Minh
        </h2>
        <div className="infomation-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10.1818C20 16.5455 12.5 22 12.5 22C12.5 22 5 16.5455 5 10.1818C5 8.01187 5.79018 5.93079 7.1967 4.3964C8.60322 2.86201 10.5109 2 12.5 2C14.4891 2 16.3968 2.86201 17.8033 4.3964C19.2098 5.93079 20 8.01187 20 10.1818Z"
              stroke="#FE5000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 14C14.433 14 16 12.433 16 10.5C16 8.567 14.433 7 12.5 7C10.567 7 9 8.567 9 10.5C9 12.433 10.567 14 12.5 14Z"
              stroke="#FE5000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>164 Đồng Khởi, P.Bến Nghé, Q1, TP Hồ Chí Minh</span>
        </div>
        <div className="infomation-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9994 16.4765V19.1862C21.0005 19.4377 20.9488 19.6867 20.8479 19.9172C20.7469 20.1477 20.5988 20.3546 20.413 20.5247C20.2273 20.6947 20.008 20.8242 19.7693 20.9048C19.5305 20.9854 19.2775 21.0153 19.0265 20.9927C16.2415 20.6907 13.5664 19.7409 11.216 18.2197C9.02929 16.8329 7.17534 14.9827 5.7858 12.8003C4.25627 10.4439 3.30442 7.76107 3.00735 4.96915C2.98473 4.71938 3.01447 4.46764 3.09468 4.22996C3.17489 3.99229 3.30381 3.77389 3.47323 3.58866C3.64265 3.40343 3.84885 3.25544 4.07872 3.15411C4.30858 3.05278 4.55707 3.00032 4.80837 3.00009H7.52347C7.96269 2.99577 8.3885 3.151 8.72152 3.43683C9.05455 3.72267 9.27207 4.11961 9.33354 4.55366C9.44814 5.42084 9.66067 6.27229 9.96707 7.09177C10.0888 7.41507 10.1152 7.76642 10.043 8.1042C9.97082 8.44198 9.80313 8.75203 9.5598 8.99761L8.41041 10.1447C9.69877 12.406 11.5748 14.2784 13.8406 15.5642L14.99 14.4171C15.2361 14.1742 15.5467 14.0069 15.8852 13.9348C16.2236 13.8628 16.5757 13.8891 16.8996 14.0106C17.7207 14.3164 18.5739 14.5285 19.4428 14.6429C19.8824 14.7048 20.2839 14.9258 20.5709 15.2639C20.858 15.6019 21.0105 16.0335 20.9994 16.4765Z"
              stroke="#FE5000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>028.38224053 - 028.38296944</span>
        </div>
        <div className="infomation-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C10.9012 2 9.82711 2.32411 8.9135 2.93135C7.99989 3.53859 7.28782 4.40168 6.86734 5.41149C6.44685 6.42129 6.33683 7.53245 6.55119 8.60445C6.76556 9.67645 7.29467 10.6611 8.07163 11.434C8.84859 12.2069 9.83849 12.7332 10.9162 12.9464C11.9938 13.1597 13.1109 13.0502 14.126 12.632C15.1412 12.2137 16.0088 11.5054 16.6193 10.5966C17.2297 9.68777 17.5556 8.61932 17.5556 7.52632C17.5556 6.06065 16.9702 4.65501 15.9284 3.61862C14.8865 2.58224 13.4734 2 12 2ZM12 10.8421C11.3407 10.8421 10.6963 10.6476 10.1481 10.2833C9.59994 9.91895 9.17269 9.40109 8.9204 8.79521C8.66811 8.18933 8.6021 7.52264 8.73072 6.87944C8.85933 6.23624 9.1768 5.64542 9.64298 5.1817C10.1092 4.71798 10.7031 4.40218 11.3497 4.27424C11.9963 4.1463 12.6665 4.21196 13.2756 4.46293C13.8847 4.71389 14.4053 5.13888 14.7716 5.68416C15.1378 6.22944 15.3333 6.87051 15.3333 7.52632C15.3333 8.40572 14.9821 9.2491 14.357 9.87093C13.7319 10.4928 12.8841 10.8421 12 10.8421ZM22 23V21.8947C22 19.8428 21.1806 17.8749 19.7219 16.424C18.2633 14.973 16.285 14.1579 14.2222 14.1579H9.77778C7.71498 14.1579 5.73667 14.973 4.27806 16.424C2.81944 17.8749 2 19.8428 2 21.8947V23H4.22222V21.8947C4.22222 20.4291 4.80754 19.0234 5.84941 17.987C6.89128 16.9507 8.30435 16.3684 9.77778 16.3684H14.2222C15.6956 16.3684 17.1087 16.9507 18.1506 17.987C19.1925 19.0234 19.7778 20.4291 19.7778 21.8947V23H22Z"
              fill="#FE5000"
            />
          </svg>
          <span>
            Người chịu trách nhiệm quản lí nội dung: Ông Võ Trọng Nam - Phó GĐ
            Sở Văn hóa và Thể thao Thành phố Hồ Chí Minh
          </span>
        </div>
      </div>
    </div>
  );
}
