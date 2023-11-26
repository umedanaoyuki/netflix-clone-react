export const SectionOne = () => {

    return (
        <section>
            <div className="texts">
                <h1 className="section-title">Enjoy on your TV.</h1>
                <p>Watch on smart TVs, playstation, Xbox</p>
            </div>
            <div className="media-s1">
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                         alt=""/>
                    <video className="videoName"
                           autoPlay playsInline muted loop
                           src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-jp-0819.m4v"
                           typeof="video/mp4"/>
                </div>
            </div>
        </section>
    );
}