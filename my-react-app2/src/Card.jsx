import profilePic from './assets/profilepic.png'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Alyssa Jordan</h2>
            <p className="card-text">Philadelphia, PA</p>
        </div>
    );

}

export default Card