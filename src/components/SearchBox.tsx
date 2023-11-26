export const SearchBox = () => {
    return (
        <>
            <h3>
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <form>
                <div>
                    <input type="email"/>
                    <span>Email Address</span>
                </div>
                <div>
                    <button className="getStartedButton">Get Started &gt;</button>
                </div>
            </form>
        </>
    );
}