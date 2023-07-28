import { useEffect, useRef } from "react";
import {
  Form,
  useActionData,
  useNavigation,
  useNavigate
} from "react-router-dom";
import Select from "react-select";
import { useState } from "react";
import "../styles/UserProfile.css";
import userProfile from "../assets/images/profile.png";
import { FaEdit } from 'react-icons/fa';

import { useAuth0 } from "@auth0/auth0-react";


export default function UserProfile() {
  const userSkills = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "CSS" },
  ];

  const { user, isAuthenticated, isLoading } = useAuth0();

  const [allowEdit, setAllowEdit] = useState(false);
  const navigate = useNavigate();

  const actionData = useActionData();
  const form = useRef(Form);
  const navigation = useNavigation();

  useEffect(
    function resetFormOnSuccess() {
      if (navigation.state === "idle" && actionData?.success) {
        setAllowEdit(false);
      }
    },
    [navigation.state, actionData]
  );

  if (!isAuthenticated) {
    return navigate("/");
  }
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profileContainer">
      {
      isAuthenticated &&
        <>
          <div className="profileImg">
            <img className="profile" src={user.picture} alt="userProfile" />
          </div>
          <div className="userDetails">
            <div className="profileText">
              <h1>Profile</h1>
            </div>
            <div className="details">

              <ul className="userData">
                {user?.name &&
                  <li>
                    <span className="leftDataItem">Name:</span>{" "}
                    <span className="dataItem">
                      {user.name}
                    </span>
                  </li>
                }
                {user?.nickname &&
                  <li>
                    <span className="leftDataItem">Username:</span> <span className="dataItem">{user?.nickname}</span>
                  </li>
                }
                {user?.email &&
                  <li>
                    <span className="leftDataItem">Email:</span><span className="dataItem">{user?.email}</span>
                  </li>
                }

                {!allowEdit ? (
                  <li className="skills">
                    <span className="leftDataItem">Skills:</span>{" "}
                    {userSkills?.map((skill, i) => (
                      <span className="skill" key={i}>
                        {skill.name}
                      </span>
                    ))}
                    <button
                      onClick={() => {
                        setAllowEdit(true);
                      }}
                    >
                      <FaEdit />
                    </button>
                  </li>
                ) : (
                  <li className="formList">
                    Skills:
                    <Form className="skillForm" method="post" ref={form}>
                      <Select
                        defaultValue={defaultOptions}
                        options={options}
                        isMulti
                        name="skills"
                        className="select-skills"
                      />
                      <button className="updateBtn"
                        disabled={
                          navigation.state === "submitting" ||
                          navigation.state === "loading"
                        }
                        type="submit"
                      >
                        {navigation.state === "submitting" ||
                          navigation.state === "loading"
                          ? "Updating.."
                          : "Update"}
                      </button>
                    </Form>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </>
      }
    </div>
  );
}
