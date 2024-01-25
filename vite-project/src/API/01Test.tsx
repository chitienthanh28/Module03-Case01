import axios from "axios";
import { useEffect, useState } from "react";
import "./01Test.css"

function TestAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://8c22c204b3474980b549d26caf5ab0eb.api.mockbin.io/")
      .then((res: any) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="C01">
        <img src="https://viblo.asia/logo_full.svg" alt="" />
        <div>
          <a href="">Bài Viết</a>
          <a href="">Hỏi Đáp</a>
          <a href="">Thảo Luận</a>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="C02"><img src="https://images.viblo.asia/full/2ea73483-c88e-4a1e-bcf5-d889a15998a8.png" alt="" /></div>
      <div className="C03">
        <span id="S01">NHÀ SÁNG TẠO NỘI DUNG</span>
        <span>MỚI NHẤT</span>
        <span>SERIES</span>
        <span>EDITORS' CHOICE</span>
        <span>TRENDING</span>
        <span>VIDEOS</span>
      </div>
      <div className="C04"><a href="#">Tham gia Facebook group "Viblo Community" để cùng nhau học tập và kết nối</a></div>
      <div className="C05">
        <div className="C06">
          {data.map((item, index) => (
            <div className="C07" key={item.id}>
              <img id="IMG1" src="https://images.viblo.asia/avatar/d3fbbb69-55f2-4530-99de-de866b71e9d8.png" alt="" />
              <div>
                <div>
                  <span>{item.published_at}</span>
                </div>
                <div>
                  <h5><span>{item.id}</span>-<span>{item.title}</span><span id="announ">{item.system}</span></h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {data.map((item, index) => (
            <div>
              <div>{item.transliterated}</div>
              <div>
                <span>{item.category.id}</span>-<span>{item.category.system}</span>
              </div>
              <p>{item.slug}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TestAPI;
