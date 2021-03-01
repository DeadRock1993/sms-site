import React from "react";
import "./style.css";
import ProfileCard from "./ProfileCard";
import ProfileGreeting from "./ProfileGreeting";
import Table from "./Table";
import Inputs from "./Inputs";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
      userData: [
        {
          id: 0,
          name: "Хайрулло Хая Хабибулоев",
<<<<<<< HEAD
          phone: "+9929100000",
=======
          phone: "+992915078888",
>>>>>>> 5fb8043cc9154d11719a4a36d3731d7ea8256b34
        },
        {
          id: 1,
          name: "Хасанов Сашок",
<<<<<<< HEAD
          phone: "+9929000000",
=======
          phone: "+9929190652",
>>>>>>> 5fb8043cc9154d11719a4a36d3731d7ea8256b34
        },

        {
          id: 2,
<<<<<<< HEAD
          name: "Тест",
=======
          name: "Их сестры",
>>>>>>> 5fb8043cc9154d11719a4a36d3731d7ea8256b34
          phone: "+9929999999",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        [name]: value,
        id: prevState.userData.length,
      },
    }));
  }
  handleClick() {
    this.setState((prevState) => ({
      ...prevState,
      userData: [...prevState.userData, prevState.inputs],
    }));
  }
  deleteRow(id) {
    this.setState((prevState) => ({
      ...prevState,
      userData: prevState.userData.filter((el) => el.id !== id),
    }));
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="row">
          <ProfileGreeting />
          <ProfileCard />
        </div>
        <div className="row">
          <div className="col">
            <Table data={this.state.userData} deleteRow={this.deleteRow} />
            <Inputs
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
