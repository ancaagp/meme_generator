import { CiImageOn } from 'react-icons/ci';
import '../style.css';
import { useState, useEffect } from 'react';


function Form() {

    const [meme, setMeme] = useState({
        topText:"", 
        bottomText:"", 
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });

    function handleChange(event){
        const name = event.target.name;
        const value =  event.target.value;
        setMeme(prevState => ({
                ...prevState,
                [name]: value
        }))
    }

    const [allMemes, setAllMemes] = useState([]);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme(prevState => ({...prevState, randomImage: url}))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    return (
        <div className="main">
            <div className="form">    
                <input 
                    className="form-input" 
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                    />
                <input 
                    className="form-input" 
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    />
                <button 
                    className="form-button"
                    onClick={getMemeImage}>
                        Get a new meme image 
                        </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}


export default Form;


