import React, { useState, useEffect } from "react";
import { List, Card, Dropdown, Menu, Modal } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
const { Meta } = Card;

const Breakfast = () => {
  const [productList, setProductList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    price: "",
    description: "",
    thumbnail: "",
  });

  const handleOpenModal = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5555/productions/${id}`);
      setCurrentProduct(res.data.production);
    } catch (error) {
      console.log(error);
    }
    setVisible(true);
  };

  const getProduct = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5555/productions?category=hotpot"
      );
      console.log(res.data.production);
      setProductList(res.data.production);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const menu = (
    <Menu style={{ backgroundColor: "#2a2b2e" }}>
      <Menu.Item style={{ color: "#eb7c7c" }}>
        <Link to="/breakfast" style={{ color: "#eb7c7c" }}>
          <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>Ăn sáng</p>
        </Link>
      </Menu.Item>
      <Menu.Item style={{ color: "#eb7c7c" }}>
        <Link to="/dimsum" style={{ color: "#eb7c7c" }}>
          <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>Dimsum</p>
        </Link>
      </Menu.Item>
      <Menu.Item style={{ color: "#eb7c7c" }}>
        <Link to="/hotpot" style={{ color: "#eb7c7c" }}>
          <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>Lẩu</p>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
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
          <Link to="/book">
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

              <div style={{ cursor: "pointer", color: "white" }}>Đặt bàn</div>
            </button>
          </Link>
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
          justifyContent: "center",
          backgroundColor: "rgb(0, 0, 0)",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <Link to="/">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span style={{ padding: "5px", cursor: "pointer" }}>
                    TRANG CHỦ
                  </span>
                </li>
              </Link>
              <Link to="/introduce">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span style={{ padding: "5px", cursor: "pointer" }}>
                    GIỚI THIỆU
                  </span>
                </li>
              </Link>
              <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                  <span style={{ padding: "5px", cursor: "pointer" }}>
                    THỰC ĐƠN
                  </span>
                </Dropdown>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/">
              <img
                style={{ width: "83px" }}
                alt="description of huhu"
                src="https://haihoangbinhtan.com/uploads/source/header/1f0552e37b409c1ec551.jpg"
              />
            </Link>
          </div>
          <div>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <Link to="/album">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span style={{ padding: "5px", cursor: "pointer" }}>
                    HÌNH ẢNH
                  </span>
                </li>
              </Link>
              <Link to="/book">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span style={{ padding: "5px", cursor: "pointer" }}>
                    ĐẶT BÀN
                  </span>
                </li>
              </Link>

              <Link to="/contact">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span style={{ padding: "5px", cursor: "pointer" }}>
                    LIÊN HỆ
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            color: "#000",
            fontSize: "25px",
            fontWeight: "500",
            marginTop: "30px",
            marginLeft: "30px",
          }}
        >
          Các món lẩu
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
            maxWidth: "1600px",
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
            dataSource={productList}
            renderItem={(item) => (
              <List.Item>
                <Card
                  onClick={() => handleOpenModal(item._id)}
                  hoverable
                  cover={
                    <img
                      style={{ height: "250px" }}
                      alt="example"
                      src={item.thumbnail}
                    />
                  }
                  style={{ fontSize: "20px", borderRadius: "10px" }}
                >
                  <Meta title={item.name} description={item.description} />
                  <div
                    style={{
                      marginTop: "15px",
                      color: "red",
                    }}
                  >
                    {" "}
                    {new Intl.NumberFormat().format(item.price)} VNĐ
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          paddingTop: "30px",
          marginTop: "50px",
        }}
      >
        <div style={{ marginRight: "30px" }}>
          <div
            style={{
              fontWeight: "500",
              fontSize: "25px",
              marginBottom: "15px",
            }}
          >
            Quán lẩu dê Hải Nam
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/anhfooter.jpg"}
              alt="heafne"
              style={{ width: "150px", marginBottom: "15px" }}
            />
          </div>
          <div>
            Đến với nhà hàng để được phục vụ tốt nhất và trãi nghiệm nhé!
          </div>
          <div>
            239-241 Vành Đai Trong, Phường Bình Trị Đông B, Bình Tân, Hồ Chí
            Minh
            <br></br>
            Hotline: 0938 624 368
            <br></br>
            Mail: quananhaihoang@gmail.com
            <br></br>
            Website: haihoangbinhtan.com
          </div>
        </div>

        <div style={{ marginLeft: "30px" }}>
          <iframe
            title="Google Map"
            style={{ width: "550px", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.807510014489!2d106.61270031472169!3d10.749313662633048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dcd24fec181%3A0x9305d628f31e46c8!2zMjM5IFbDoG5oIMSQYWkgVHJvbmcsIELDrG5oIFRy4buLIMSQw7RuZyBCLCBCw6xuaCBUw6JuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1617431019274!5m2!1svi!2s"
          ></iframe>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#282828",
          color: "white",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        © 2021 Quán lẩu dê Hải Nam - Thiết kế bởi finx.vn
      </div>
      <Modal
        title="Thông tin chi tiết món ăn"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={null}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "60%" }}>
            <img
              style={{ maxWidth: "500px", maxHeight: "500px" }}
              alt="mjbb"
              src={currentProduct.thumbnail}
            ></img>
          </div>
          <div style={{ width: "40%" }}>
            <h2>Tên món ăn: {currentProduct.name} </h2>
            <p style={{ color: "red" }}>Giá: {currentProduct.price}</p>
            <p>Mô tả chi tiết: {currentProduct.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Breakfast;
