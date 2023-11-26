export const QuestionThree = () => {
    return <>
        <div className="questions">
            <div className="question">
                <input type="checkbox" id="q3"></input>
                <label className="questionHeader" htmlFor="q3">
                    Where can I watch?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </label>
                <div className="questionAnswer">
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                    netflix.com from your personal computer or on any internet-connected device that offers the Netflix
                    app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to
                    watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                </div>
            </div>
        </div>
    </>
}