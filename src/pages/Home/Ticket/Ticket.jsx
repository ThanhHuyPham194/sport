import React, { useEffect, useRef } from 'react';
import TicketItem from '../../../components/TicketItem/TicketItem';
import image1 from '../../../assets/images/image1.png';
import './Ticket.scss';
import VanillaTilt from 'vanilla-tilt';
export default function Ticket() {
  let imgRef = useRef();
  useEffect(() => {
    VanillaTilt.init(imgRef.current, {
      max: 25,
      speed: 300,
    });

  }, []);
  return (
    <div className='ticket container'>
      <h2 className="ticket__title" data-aos="fade-right">
        Đặt vé
      </h2>
      <div className="ticket__line" data-aos="zoom-in" data-aos-duration="2000"></div>
      <div className="ticket__wrapper" >
        <TicketItem title="Giải bóng rổ năng khiếu trẻ"
          time="22/06/2022" place="Nhà thi đấu phú thọ"
          content={['Sau 2 tháng tạm hoãn vì COVID-19, các trận đấu đã chính thức trở lại, mở ra cơ hội tranh tài cho dàn VĐV có độ tuổi trải dài từ 11 đến 18 tuổi.', 'Trong công cuộc chống dịch, mọi hoạt động thể thao đã bị tạm hoãn. Giải đấu đang tổ chức cũng buộc phải ngưng lại, cùng với đó là quá trình tập luyện và thi đấu của các baller. ']}
          price="180.000 VND"
        />
        <TicketItem title="Giải bơi lội vô địch đồng đội trẻ quốc gia"
          data-aos-delay="300"
          time="15/07/2022" place="Câu lạc bộ bơi lội Q.5"
          content={['Giải đấu năm nay quy tụ gần 530 vận động viên nam,nữ ở hai bộ môn bơi và lặn đến từ 37 đoàn trong cả nước. Các vận động viên tham gia tranh tài ở 203 bộ huy chương.', 'Đây là giải đấu thường niên nằm trong hệ thống thi đấu quốc gia nhằm đánh giá công tác đào tạo vận động viên môn bơi - lặn tại các địa phương, các ngành. Qua giải đấu, Ban tổ chức phát hiện, tuyển chọn các vận động viên trẻ có thành tích xuất sắc nhằm bồi dưỡng vào đội tuyển quốc gia để tham dự các giải đấu khu vực và quốc tế.']}
          price="120.000 VND"
        />
      </div>
      <div className="ticket__wrapper">
        <TicketItem title="Giải quần vợt vô địch đồng đội trẻ quốc gia"
          time="22/08/2022" place="Nhà thi đấu phú thọ"
          content={['Giải Quần vợt vô địch đồng đội trẻ quốc gia 2022 thu hút hơn 100 tay vợt trẻ đến từ 11 đoàn và câu lạc bộ quần vợt, diễn ra tại Trung tâm Thi đấu & Huấn luyện TDTT tỉnh Vĩnh Long (TP Vĩnh Long). Sân chơi dành cho các VĐV lứa tuổi thanh thiếu niên đầu tiên trong năm 2022 là cơ hội để các tay vợt tăng cường thi đấu, nâng cao thành tích.', 'Giải năm nay sẽ có 6 nội dung thi đấu, gồm: đồng đội nam U14, đồng đội nữ U14, đồng đội nam U16, đồng đội nữ U16, đồng đội nam U18, đồng đội nữ U18. Ngoài điểm thưởng trên bảng xếp hạng quốc gia, các tay vợt đạt thành tích cao tại giải đấu lần này còn nhận được cúp vô địch và huy chương vàng, bạc, đồng.']}
          price="180.000 VND"
        />
        <div className="ticket__wrapper--img" ref={imgRef} data-aos="my-animation" data-aos-delay="500">
          <img src={image1} alt="team-img" />
        </div>
      </div>
    </div>
  );
}
