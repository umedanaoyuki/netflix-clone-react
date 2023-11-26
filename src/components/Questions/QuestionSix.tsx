export const QuestionSix = () => {
    return <>
        <div className="questions">
            <div className="question">
                <input type="checkbox" id="q6"></input>
                <label className="questionHeader" htmlFor="q6">
                    Is Netflix good for kids?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </label>
                <div className="questionAnswer">
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy
                    family-friendly TV shows and movies in their own space.

                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of
                    content kids can watch and block specific titles you don’t want kids to see.
                </div>
            </div>
        </div>
    </>
}