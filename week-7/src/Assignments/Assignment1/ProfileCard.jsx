import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-96 overflow-hidden rounded-lg shadow-lg flex flex-col">
        <div>
          <img
            className="w-full h-36 rounded-t-lg"
            src={props.background}
          />
        </div>
        <div>
          <img
            className="h-24 w-24 rounded-full mx-auto -mt-16 border-2 border-white"
            src={props.profile}
            alt="Photo"
          ></img>
        </div>
        <div>
          <div className="p-10">
            <h3 className="font-bold text-xl">
              {props.name} <span className="text-gray-400 text-lg">{props.age}</span>
            </h3>
            <p className="text-gray-400 font-medium">{props.city}</p>
          </div>
          <div className="flex justify-around border-t border-gray-300 p-4 font-bold">
            <div>
              <p className="text-xl">{props.followers}</p>
              <p className="text-gray-400 text-xs font-semibold">Followers</p>
            </div>
            <div>
              <p className="text-xl">{props.likes}</p>
              <p className="text-gray-400 text-xs font-semibold">Likes</p>
            </div>
            <div>
              <p className="text-xl">{props.photos}</p>
              <p className="text-gray-400 text-xs font-semibold">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
