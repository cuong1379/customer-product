import React, { Fragment } from "react";
import { Carousel, List, Card } from "antd";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const contentStyle1 = {
  backgroundPosition: "center",
  height: "500px",
  backgroundImage: `url("https://haihoangbinhtan.com/uploads/source/slider/nhahanghaihoang1.jpg")`,
};
const contentStyle2 = {
  backgroundPosition: "center",
  height: "500px",
  backgroundImage: `url("https://haihoangbinhtan.com/uploads/source/slider/monmoihaihoangbinhtan.jpg")`,
};
const contentStyle3 = {
  backgroundPosition: "center",
  height: "500px",
  backgroundImage: `url("https://haihoangbinhtan.com/uploads/source/slider/nhahanghaihoangbinhtan.jpg")`,
};
const contentStyle4 = {
  backgroundPosition: "center",
  height: "500px",
  backgroundImage: `url("https://haihoangbinhtan.com/uploads/source/slider/nhahanghaihoang.jpg")`,
};

const LandingPage = () => {
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  const responsive1 = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };
  const responsive2 = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <img
      style={{ width: "275px", height: "200px" }}
      src={process.env.PUBLIC_URL + "/mon1.jpg"}
      alt="has1"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "275px", height: "200px" }}
      src={process.env.PUBLIC_URL + "/mon2.jpg"}
      alt="has2"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "275px", height: "200px" }}
      src={process.env.PUBLIC_URL + "/mon3.jpg"}
      alt="has3"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "275px", height: "200px" }}
      src={process.env.PUBLIC_URL + "/mon1.jpg"}
      alt="has1"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "275px", height: "200px" }}
      src={process.env.PUBLIC_URL + "/mon2.jpg"}
      alt="has2"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "275px", height: "200px" }}
      src={process.env.PUBLIC_URL + "/mon3.jpg"}
      alt="has3"
      onDragStart={handleDragStart}
    />,
  ];

  const items1 = [
    <div>
      <img
        style={{ width: "175px" }}
        src={process.env.PUBLIC_URL + "/mon5.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <img
        style={{ width: "175px" }}
        src={process.env.PUBLIC_URL + "/mon5.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <img
        style={{ width: "175px" }}
        src={process.env.PUBLIC_URL + "/mon5.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <img
        style={{ width: "175px" }}
        src={process.env.PUBLIC_URL + "/mon5.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <img
        style={{ width: "175px" }}
        src={process.env.PUBLIC_URL + "/mon5.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <img
        style={{ width: "175px" }}
        src={process.env.PUBLIC_URL + "/mon5.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <img
        style={{ width: "175px" }}
        src={process.env.PUBLIC_URL + "/mon5.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <img
        style={{ width: "175px" }}
        src={process.env.PUBLIC_URL + "/mon5.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <img
        style={{ width: "175px" }}
        src={process.env.PUBLIC_URL + "/mon5.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
  ];

  const items2 = [
    <div>
      <img
        style={{ width: "350px", height: "225px" }}
        src={process.env.PUBLIC_URL + "/tiec4.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <img
        style={{ width: "350px", height: "225px" }}
        src={process.env.PUBLIC_URL + "/tiec1.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <img
        style={{ width: "350px", height: "225px" }}
        src={process.env.PUBLIC_URL + "/tiec2.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <img
        style={{ width: "350px", height: "225px" }}
        src={process.env.PUBLIC_URL + "/tiec3.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <img
        style={{ width: "350px", height: "225px" }}
        src={process.env.PUBLIC_URL + "/tiec4.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <img
        style={{ width: "350px", height: "225px" }}
        src={process.env.PUBLIC_URL + "/tiec1.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <img
        style={{ width: "350px", height: "225px" }}
        src={process.env.PUBLIC_URL + "/tiec2.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <img
        style={{ width: "350px", height: "225px" }}
        src={process.env.PUBLIC_URL + "/tiec3.jpg"}
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
  ];

  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
  ];

  const items3 = [
    <img
      style={{ width: "250px", height: "300px" }}
      src={process.env.PUBLIC_URL + "/anh1.jpg"}
      alt="has1"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "250px", height: "300px" }}
      src={process.env.PUBLIC_URL + "/anh1.jpg"}
      alt="has2"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "250px", height: "300px" }}
      src={process.env.PUBLIC_URL + "/anh1.jpg"}
      alt="has3"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "250px", height: "300px" }}
      src={process.env.PUBLIC_URL + "/anh1.jpg"}
      alt="has1"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "250px", height: "300px" }}
      src={process.env.PUBLIC_URL + "/anh1.jpg"}
      alt="has2"
      onDragStart={handleDragStart}
    />,
    <img
      style={{ width: "250px", height: "300px" }}
      src={process.env.PUBLIC_URL + "/anh1.jpg"}
      alt="has3"
      onDragStart={handleDragStart}
    />,
  ];
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          backgroundColor: "rgb(243, 0, 69)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            style={{ width: "25px", fill: "currentColor" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M 22.625 3.03125 C 22.304688 3.0625 21.976563 3.148438 21.65625 3.28125 L 21.65625 3.25 C 21.640625 3.253906 21.609375 3.277344 21.59375 3.28125 C 19.160156 4.136719 14.5 6.28125 10.28125 10.5 C 6.03125 14.75 3.980469 19.496094 3.0625 21.84375 L 3.0625 21.875 C 2.65625 23.089844 2.945313 24.40625 3.75 25.34375 L 3.78125 25.375 L 3.78125 25.40625 L 6.78125 28.375 L 6.90625 28.5 C 7.734375 29.328125 9.171875 29.328125 10 28.5 L 14.09375 24.40625 C 14.921875 23.578125 14.921875 22.109375 14.09375 21.28125 L 12.125 19.3125 C 12.46875 18.597656 13.359375 16.839844 14.9375 15.1875 C 16.503906 13.546875 18.300781 12.710938 19 12.40625 L 21.0625 14.46875 L 21.15625 14.53125 C 21.625 14.84375 22.160156 15.019531 22.71875 15 C 23.242188 14.980469 23.785156 14.722656 24.1875 14.28125 L 24.21875 14.3125 L 24.28125 14.21875 L 28.3125 10.21875 C 29.140625 9.390625 29.140625 7.921875 28.3125 7.09375 L 25.21875 4 C 24.78125 3.5625 24.191406 3.234375 23.5625 3.09375 C 23.257813 3.027344 22.945313 3 22.625 3.03125 Z M 22.78125 5.03125 C 23.160156 5.003906 23.539063 5.164063 23.78125 5.40625 L 26.90625 8.5 C 27.078125 8.671875 27.078125 8.609375 26.90625 8.78125 L 22.71875 12.96875 C 22.722656 12.964844 22.71875 12.996094 22.625 13 C 22.546875 13.003906 22.429688 12.9375 22.3125 12.875 L 22.25 12.875 L 19.90625 10.5 L 19.4375 10.03125 L 18.84375 10.25 C 18.84375 10.25 15.769531 11.398438 13.46875 13.8125 C 11.207031 16.179688 9.96875 19.09375 9.96875 19.09375 L 9.71875 19.71875 L 10.1875 20.21875 L 12.6875 22.71875 C 12.859375 22.890625 12.859375 22.828125 12.6875 23 L 8.59375 27.09375 C 8.421875 27.265625 8.484375 27.265625 8.3125 27.09375 L 5.25 24.0625 C 5.242188 24.054688 5.257813 24.039063 5.25 24.03125 L 5.21875 24 C 4.871094 23.566406 4.765625 23.105469 4.9375 22.5625 C 4.941406 22.550781 4.933594 22.542969 4.9375 22.53125 C 5.824219 20.273438 7.777344 15.847656 11.71875 11.90625 C 15.675781 7.949219 20.164063 5.914063 22.34375 5.15625 L 22.375 5.125 L 22.40625 5.125 C 22.527344 5.070313 22.65625 5.039063 22.78125 5.03125 Z" />
          </svg>
          <div> Hotline: 0938 624 368 - Phone: 0937 230 388</div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{
              padding: "10px",
              border: "none",
              background: "rgba(255,211,109,1)",
              display: "flex",
              marginRight: "20px",
            }}
          >
            <svg
              style={{
                width: "20px",
                color: "white",
                fill: "currentColor",
                marginRight: "5px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 Z" />
            </svg>
            <div>Đặt bàn</div>
          </button>
          <form style={{ color: "black", width: "150px", borderRadius: "5px" }}>
            <select
              style={{ width: "150px", borderRadius: "5px" }}
              name="cars"
              id="cars"
            >
              <option value="volvo"> Tiếng Việt</option>
              <option value="saab">中国人</option>
            </select>
          </form>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          backgroundColor: "rgb(0, 0, 0)",
          color: "white",
        }}
      >
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
            TRANG CHỦ
          </li>
          <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
            GIỚI THIỆU
          </li>
          <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
            THỰC ĐƠN
          </li>
          <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
            HÌNH ẢNH
          </li>
        </ul>
        <div>
          <img
            style={{ width: "83px" }}
            alt="description of huhu"
            src="https://haihoangbinhtan.com/uploads/source/header/1f0552e37b409c1ec551.jpg"
          />
        </div>
        <div>
          <ul style={{ listStyle: "none", display: "flex" }}>
            <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
              TRANG CHỦ
            </li>
            <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
              GIỚI THIỆU
            </li>
            <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
              THỰC ĐƠN
            </li>
            <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
              HÌNH ẢNH
            </li>
          </ul>
          <ul style={{ listStyle: "none", display: "flex" }}>
            <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
              TRANG CHỦ
            </li>
            <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
              GIỚI THIỆU
            </li>
            <div>
              <img
                style={{ marginLeft: "30px", height: "30px" }}
                alt="description of hehe"
                src="https://haihoangbinhtan.com/uploads/source/header/tim.png"
              />
            </div>
          </ul>
        </div>
      </div>
      <Carousel autoplay style={{ height: "100%" }}>
        <div>
          <div style={contentStyle1}></div>
        </div>
        <div>
          <div style={contentStyle2}></div>
        </div>
        <div>
          <div style={contentStyle3}></div>
        </div>
        <div>
          <div style={contentStyle4}></div>
        </div>
      </Carousel>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <img src={process.env.PUBLIC_URL + "/daubep1.png"} alt="meocon" />
        </div>

        <div>
          <div
            style={{
              fontFamily: "Satisfy",
              color: "#990000",
              fontSize: "30px",
              fontWeight: "600",
              marginTop: "50px",
              marginLeft: "30px",
            }}
          >
            Góc Tuyển Dụng
          </div>
          <br></br>
          <div style={{ fontSize: "15px" }}>
            <div>
              Chúng tôi cần tuyển 10 bạn Phục vụ, không giới hạn độ tuổi và giới
              tính. Yêu cầu công việc như sau:
            </div>
            <br></br>
            <div>- Giới thiệu menu theo nhu cầu của khách.</div>
            <div>- Set up trước mỗi ca làm việc.</div>
            <div>- Đảm bảo chất lượng phục vụ của nhà hàng</div>
            <div>- Các công việc khác theo hướng dẫn của quản lý nhà hàng.</div>
            <div>- Ưu tiên ứng viên tốt tiếng Hoa</div>
            <br></br>
            <div>Yêu cầu: Không yêu cầu kinh nghiệm, ngoại hình dễ nhìn.</div>
            <br></br>
            <div>Lương: thỏa thuận</div>
            <div>
              Phỏng vấn tại địa điểm: 239 - 241 Vành Đai Trong, P. Bình Trị Đông
              B, Q. Bình Tân
            </div>
          </div>

          <hr style={{ fontWeight: "300", marginTop: "70px" }}></hr>

          <div
            style={{
              fontFamily: "Satisfy",
              color: "#990000",
              fontSize: "30px",
              fontWeight: "600",
              marginTop: "30px",
              marginLeft: "30px",
            }}
          >
            Thực Đơn
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "1200px", width: "100%", marginTop: "50px" }}>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            color: "#000",
            fontSize: "25px",
            fontWeight: "500",
            marginTop: "30px",
            marginLeft: "30px",
          }}
        >
          Các Món Chính
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <List
            style={{ width: "100%" }}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              maxWidth: "800px",
              width: "80%",
              height: "1px",
              backgroundColor: "black",
            }}
          ></div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              fontFamily: "Satisfy",
              color: "#990000",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Set Tiệc
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "1200px", width: "100%", marginTop: "50px" }}>
          <AliceCarousel
            mouseTracking
            items={items1}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive1}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            fontFamily: "Satisfy",
            color: "#990000",
            fontSize: "30px",
            fontWeight: "600",
            marginTop: "30px",
            marginLeft: "30px",
          }}
        >
          Sự Kiện - Góc Ẩm Thực
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#fff5e0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <AliceCarousel
            mouseTracking
            items={items2}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive2}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            fontFamily: "Satisfy",
            color: "#990000",
            fontSize: "30px",
            fontWeight: "600",
            marginTop: "50px",
            marginLeft: "30px",
          }}
        >
          Thư viện ảnh
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "1200px", width: "100%", marginTop: "50px" }}>
          <AliceCarousel
            mouseTracking
            items={items3}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#990000",
        }}
      >
        <div>KHÁCH HÀNG NÓI GÌ VỀ NHÀ HÀNG NÓN LÁ</div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
