import "../../../App.css";
import lightChainIcon from "../../../assets/images/chain-Icon-white.svg";

const LinkForm = () => {
    return (
        <form className="link-form">
            <input id="link-input" type="text" placeholder="example.com/sample.mp3" required></input>
            <button type="submit"><img src={lightChainIcon}></img></button>
        </form>
    );
};

export default LinkForm;