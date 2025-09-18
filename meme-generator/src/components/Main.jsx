import { useEffect, useState } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Morder",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  const getMemeImage = () => {
    const ranNum = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[ranNum].url;
    setMeme((prev) => ({
      ...prev,
      imgUrl: newMemeUrl,
    }));
  };

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imgUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
};

export default Main;
