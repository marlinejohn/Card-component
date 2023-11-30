import profilePic from "./assets/profile.jpg" 

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Marline Jess</h2>
            <p className="card-text"> I am new developer, transforming numbers into code</p>
        </div>
    )
}

export default Card;