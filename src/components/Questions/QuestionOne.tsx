export const QuestionOne = () => {

    return (
        <>
            <h1>Frequently Asked Questions</h1>
            <div className="questions">
                <div className="question">
                    <input type="checkbox" id="q1"></input>
                    <label className="questionHeader" htmlFor="q1">
                        What is Netflix ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </label>
                    <div className="questionAnswer">
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                        movies, anime, documentaries, and more on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want – all for one low monthly price.
                        There's always something new to discover and new TV shows and movies are added every
                        week!
                    </div>
                </div>
            </div>
        </>
    );
}