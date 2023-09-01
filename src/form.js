import React from "react";
import { Rate } from "antd";
import { Container, Card, Image,Head,DataDiv,Page } from "./stylings";
import { useState } from "react";

const Form = (props) => {
  const [data, setData] = useState([]);
  const [Name, setName] = useState(" ");
  const [Location, setLocation] = useState(" ");
  const [Rating, setRating] = useState(" ");
  const [show, setshow] = useState(false);
  const [Review, setReview] = useState("");
  const [starValue, setStarValue] = useState("");
  const [click, setClick] = useState(false);

  const Star = (value) => {
    return (
      <div>
        <Rate allowHalf value={parseFloat(value)}></Rate>
      </div>
    );
  };

  const handleRatings = (Ratings) => {
    setStarValue(Ratings);
  };

  const handleSubmit = () => {
    if (Name !== "") {
      setshow(true);
    }
    setData([...data, obj]);
    setName("");
    setLocation("chose location");
    setRating("value");
    setReview("");
    setStarValue("");
    setClick(false);
  };

  let obj = {
    name: Name,
    location: Location,
    rating: Rating,
    starvalue: starValue,
    review: Review,
  };

  const handleName = (value) => {
    if ((Name !== " ") && (Review !== " ")){
      setClick(true);
    }
    

    setName(value);
  };
  const handleLocation = (location) => {
    setLocation(location);
  };

  const handleReview = (value) => {
    setReview(value);
  };
  const handleRating = (value) => {
    setRating(value);
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  let location = ["chose location", "chennai", "bangalore", "hyderabad"];
  let ratings = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  return (
    <Page>
      <Container id="form ">
        <Head>ENTER YOUR REVIEWS</Head>
        <label>Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            handleName(e.target.value);
          }}
          value={Name}
          required
        ></input>
        <br />
        

        <label>Location</label>
        <select onChange={(e) => handleLocation(e.target.value)} value={Location}>
          {location.map((location, index) => (
            <option>{location}</option>
          ))}
        </select>
        <br />
        <br />

        <label>ratings</label>
        <select onChange={(e) => handleRating(e.target.value)} value={Rating}> 
          {ratings.map((ratings, index) => (
            <option>{ratings}</option>
          ))}
          <br />
        </select>
        <br />
        <br />
        <label>Review</label>
        <textarea
          onChange={(e) => {
            handleReview(e.target.value);
          }}
          value={Review}
          required
        ></textarea>
        <br />
        <br />

        {click && (
          <button type="submit" onClick={() => handleSubmit()}>
            submit
          </button>
        )}
      </Container>

      <DataDiv>
      {show &&
        data.map((item, index) => {
          console.log(item);
          return (
            <Card className="output">
              <Image
                
                  src="https://icons-for-free.com/iconfiles/png/512/customer+information+personal+profile+user+icon-1320086045331670685.png"
                  alt="uploaded_image"
                  style={{ width: "150px", height: "170px" }}
                >
              </Image>
              <div>
                <h2>{item?.name}</h2>
                <p>Location: {item?.location}</p>
                <p>Ratings: {item?.rating} </p>
                <span>{Star(item?.rating)}</span>
                <div>review: {item?.review}</div>
                <button onClick={(e) => handleDelete(index)}>Delete</button>
              </div>
            </Card>
          );
        })}
        </DataDiv>
    </Page>
  );
};
export default Form;
