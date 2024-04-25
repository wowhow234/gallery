import { useState } from "react";
import "../src/css/app.css";
import dummy from "./db/data.json";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seeImage, setSeeImage] = useState();

  const handleopenModal = (id) => {
    // 넘겨받은 id로 id가 일치하는지 확인
    // dummy.data[id - 1]; // 더미데이터의 인덱스로 데이터 찾은거임 !!! json 객체 그 한줄 덩어리!!
    setIsModalOpen(true);
    console.log("인자로 받은 id(map의 item의 id임)----->", id); // map의 item의 id 이다. map의 index와 다르다 !!!

    //  onsole.log("dummydata : ", dummydata.id); // 이미지 id

    // console.log("더미데이터배열목록", dummy.data); // 결과 배열로 나옴
    // console.log("---dummydata----", dummydata);
    const findId = dummy.data.find((item) => item.id === id);
    console.log("find함수결과----->", findId);
    setSeeImage(findId);
  };

  const handlecloseModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      <div className="title">
        <span>모달창으로 이미지 보기 연습</span>
        <p>클릭하면 원본 이미지 띄우기</p>
        <div className="hr" />
      </div>
      {dummy.data.map((item, id) => (
        <div key={id} className="item">
          <div className="image">
            <img
              src={item.image}
              alt={"pic" + `${item.title}`}
              onClick={() => handleopenModal(item.id)}
            />
          </div>
          <div className="picname">
            <span>{item.title}</span>
          </div>
        </div>
      ))}
      {isModalOpen && <Modal closeModal={handlecloseModal} data={seeImage} />}
    </div>
  );
}

export default App;
