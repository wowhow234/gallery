import { useRef, useState } from "react";
import "../src/css/app.css";
import dummy from "./db/data.json";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleopenModal = (id) => {
    const dummydata = dummy.data[id - 1];
    // if (id === dummydata.id) {
    //   dummydata.imgState === true
    //   setIsModalOpen(true);
    //   console.log("id값 출력-----", id);
    // } else console.log("----id 틀려용---", dummy.data[id - 1]);
    // console.log("---if문 밖에서 id 출력---", id);
    console.log("dummydata에서 id 추출", dummydata.id);
    console.log("인자로 받은 id값 출력-----", id);
    setIsModalOpen(true);
    console.log("더미데이터배열목록", dummy.data);
    console.log("isModalOpen?", isModalOpen);
  };
  const handlecloseModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      <div className="title">
        <span>Great Scenery!</span>
        <p>모달창으로 이미지 보기 연습</p>
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

            {isModalOpen && (
              <Modal
                // isOpen={isModalOpen}
                closeModal={handlecloseModal}
                data={item}
              />
            )}
          </div>
          <div className="picname">
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
