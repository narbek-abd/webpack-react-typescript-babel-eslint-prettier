import Vv from "./cashback.svg";
import avatar_default from "./avatar_default.png";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function App() {
  console.log(Pagination)
  return (
    <div>
      <Swiper modules={[Pagination]}>
        <SwiperSlide>2</SwiperSlide>
      </Swiper>

      <img src={avatar_default} />
      <Vv style={{ color: "red" }} />
    </div>
  );
}

export default App;
