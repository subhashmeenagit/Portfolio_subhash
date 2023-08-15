import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={"https://avatars.githubusercontent.com/u/141575275?v=4"}
                    alt="Founder"
                />

                <h2>Subhash CHand</h2>
                <p>Keep Working, Definetly we successed</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://youtube.com/" target={"blank"}>
                        <AiFillYoutube />
                    </a>
                    <a href="https://accounts.google.com/b/0/AddMailService" target={"blank"}>
                        <AiFillInstagram />
                    </a>
                    <a href="https://github.com/subhashmeenagit" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};

export default Footer;