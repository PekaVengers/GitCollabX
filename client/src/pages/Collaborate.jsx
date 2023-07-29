import "../styles/Collaborate.css";
import users from "../db/collaborators.json";

export default function Collaborate() {
  
  return (
    <div className="collaborator-container">
      <h1>Find Collaborators for your project</h1>
      {users.map((user, index) => {
        return (
          <div key={index} className="collaborator-card">
            <div className="row">
              <div className="user-image">
                <img src={user.picture} alt={user.name} />
              </div>
              <div className="user-details">
                <div className="user-name">
                  {user.name}
                </div>
                <div className="user-email">
                  {user.email}
                </div>
              </div>
            </div>
            <div className="row skills-container">
              {user.skills.map((skill, ind) => {
                return (
                  <div className="skill-card" key={ind}>
                    {skill}
                  </div>
                );
              })}
            </div>
            <div className="row">
              <button className="invite-user">
                Invite User
              </button>
            </div>
          </div>
        );
      })}
    </div>

  )
}