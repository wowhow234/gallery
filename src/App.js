import "../src/css/app.css";
import dummy from "./db/data.json";

function App() {
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
              <img src={item.image} alt={"pic" + `${item.title}`} />
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
