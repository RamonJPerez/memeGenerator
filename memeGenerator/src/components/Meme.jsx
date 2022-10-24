
import memeData from "../memeData";

export default function Meme() {
  
  let url

  function getMeme(e) {
    e.preventDefault(); 
      const data = memeData.data.memes
    const memeRandom = Math.floor(Math.random() * data.length)
    url = data[memeRandom].url
  console.log(url)

  }
  
  return (
    <main>
      <p>{url}</p>
      <form className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button type="botton"
          placeholder="Get a Meme"  
          className="form--button"
          onClick={getMeme} >
            Get a meme
        </button>
      </form>
    </main>
  )
}