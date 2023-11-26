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
import {QuestionTwo} from "./components/Questions/QuestionTwo.tsx";
import {QuestionThree} from "./components/Questions/QuestionThree.tsx";
import {QuestionFour} from "./components/Questions/QuestionFour.tsx";
import {QuestionFive} from "./components/Questions/QuestionFive.tsx";
import {QuestionSix} from "./components/Questions/QuestionSix.tsx";


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
                <QuestionTwo/>
                <QuestionThree/>
                <QuestionFour/>
                <QuestionFive/>
                <QuestionSix/>
            </div>
        </>
    )
}

export default App
