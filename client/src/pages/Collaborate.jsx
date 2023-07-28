import "../styles/Collaborate.css";

export default function Collaborate() {
  const users = [
    {
      picture: "https://avatars.githubusercontent.com/u/75559082?v=4",
      name: "kai",
      nickname: "kai11",
      email: "kai@gmail.com",
      skills: ["Python", "Django", "React", "CSS"]
    },
    {
      picture: "https://avatars.githubusercontent.com/u/75559082?v=4",
      name: "ray",
      nickname: "ray11",
      email: "ray@gmail.com",
      skills: ["Python", "Django", "React", "CSS"]
    },
    {
      picture: "https://avatars.githubusercontent.com/u/75559082?v=4",
      name: "max",
      nickname: "max11",
      email: "max@gmail.com",
      skills: ["Python", "Django", "React", "CSS"]
    },
    {
      picture: "https://avatars.githubusercontent.com/u/75559082?v=4",
      name: "tyson",
      nickname: "tyson",
      email: "tyson@gmail.com",
      skills: ["Python", "Django", "React", "CSS"]
    },
  ]
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