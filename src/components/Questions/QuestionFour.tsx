export const QuestionFour = () => {
    return <>
        <div className="questions">
            <div className="question">
                <input type="checkbox" id="q4"></input>
                <label className="questionHeader" htmlFor="q4">
                    How do I cancel?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </label>
                <div className="questionAnswer">
                    Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your
                    account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                </div>
            </div>
        </div>
    </>
}