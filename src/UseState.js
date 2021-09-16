import React, { useState } from "react";
const myBiodata = [
  { id: 1, name: "padmakar" },
  { id: 2, name: "rahul" },
  { id: 3, name: "deepak" },
  { id: 4, name: "manish" },
];
const UseState = () => {
  const [data, setData] = useState(myBiodata);
  const filterData = (e) => {
    const newData = myBiodata.filter((d) => d.name.includes(e.target.value));
    setData(newData);
  };
  return (
    <div style={{ margin: "300px" }}>
      <div>
        <input type="text" onChange={filterData} />
      </div>
      {data.map((d, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "160px",
          }}
        >
          {d.name}
        </div>
      ))}
    </div>
  );
};

export default UseState;
