import { useRef, useState } from "react";
import "../src/css/app.css";
import dummy from "./db/data.json";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleopenModal = (id) => {
    setIsModalOpen(true);
    console.log("id값 출력-----", id);
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
        <div key={id}>
          <div className="item">
            <div className="image">
              <img
                src={item.image}
                alt={"pic" + `${item.title}`}
                onClick={() => handleopenModal(item.id)}
                key={item}
              />
              {isModalOpen && (
                <Modal
                  isOpen={isModalOpen}
                  closeModal={handlecloseModal}
                  data={item}
                />
              )}
            </div>
            <div className="picname">
              <span>{item.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
