import logo from "./logo.svg";
import "./App.css";
import imageInSrc from "./imageInSrc.jpg";
import "./styles.css";

function App() {
    return (
        <div style={{ border: "solid 1px black", maxWidth: "100 vw" }}>
            <h2 className="title red">Your name here</h2>
            <br />
            <h3 className="title1 red">Hbaieb Amin</h3>
            {/*image in src*/}
            <img className="myimg" src={imageInSrc} alt="my_pic" />
            <br />
            {/*image in pub*/}
            <img src="/GMClogo.png" alt="my_pic2" />
            <video width="320" height="240" controls>
                <source src="/myVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
