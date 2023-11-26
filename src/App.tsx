import "./App.css";
import {SearchBox} from "./components/SearchBox.tsx";
import {TopPageMessages} from "./components/TopPageMessages.tsx";
import {BackGround} from "./components/BackGround.tsx";
import {Header} from "./components/Header.tsx";
import {SectionOne} from "./components/Sections/SectionOne.tsx";
import {SectionTwo} from "./components/Sections/SectionTwo.tsx";
import {SectionThree} from "./components/Sections/SectionThree.tsx";
import {SectionFour} from "./components/Sections/SectionFour.tsx";
import {QuestionOne} from "./components/Questions/QuestionOne.tsx";


function App() {

    return (
        <>
            <Header/>
            <div className="splash">
                <BackGround/>
                <div className="content">
                    <div>
                        <TopPageMessages/>
                        <SearchBox/>
                    </div>
                </div>
            </div>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <div className="faq">
                <QuestionOne/>
            </div>
        </>
    )
}

export default App
