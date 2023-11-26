export const QuestionTwo = () => {

    return (
        <div className="questions">
            <div className="question">
                <input type="checkbox" id="q2"></input>
                <label className="questionHeader" htmlFor="q2">
                    How much does Netflix cost?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </label>
                <div className="questionAnswer">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed
                    monthly fee. Plans range from JPY790 to JPY1,980 a month. No extra costs, no contracts.
                </div>
            </div>
        </div>
    );
}