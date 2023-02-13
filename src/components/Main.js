import React , {useState,useEffect} from 'react';

function Main(){
        
    const [memeImage,setMemeImage] = useState({topText:"",bottomText:"",url:"https://i.imgflip.com/30b1gx.jpg"})
    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            url: url
        }))
    }

    function handleChange(e){
        const {name, value} = e.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return(
        <main>
            <div className='form'>
            <input type="text" placeholder="Enter upper text" className='input-1' name="topText" value={memeImage.topText} onChange={handleChange}></input> 
            <input type="text" placeholder="Enter lower text" className='input-2' name="bottomText" value={memeImage.bottomText} onChange={handleChange}></input> 
            <button onClick={getMemeImage} className='button'>Generate</button>
            </div>
            <div className='meme'>
            <img src={memeImage.url} className="meme--image"/>
            <h2 className="meme--textTop">{memeImage.topText}</h2>
            <h2 className="meme--textBottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    );
}

export default Main;