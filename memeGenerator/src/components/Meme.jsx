
import memeData from "../memeData";
import { useState } from "react";




export default function Meme() {
  let url

  const[memeImage, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  }) 

  const[allMemeImages, setAllMemeImages] = useState(memeData)

  


  function getMeme(e) {
    e.preventDefault(); 
      const data = allMemeImages.data.memes
    const memeRandom = Math.floor(Math.random() * data.length)
    url = data[memeRandom].url
    setMeme(oldValue => ({
      ...oldValue,
      randomImage: url
    }))

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
      <img src={memeImage.randomImage} className="meme--image"/>
    </main>
  )
}