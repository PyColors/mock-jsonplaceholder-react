import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import GetDataPresentation from "../get-data-presentation/GetDataPresentation";

// ui
import Loader from "../../components/ui/loader/Loader";

class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        this.setState({
          users: res.data,
          isLoading: false
        });
      })
      .catch(error => {
        // Error!!!
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const {
      users,
      isLoading
    } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return (

      <section> 
      {(users.length > 0) ? (
              users.map(function (user, indexItem) {
                return (
                  
                  <GetDataPresentation key={indexItem}
                      userId={user.id}
                      name={user.name}
                      username={user.username}
                      email={user.email}
                      street={user.address.street}
                      suite={user.address.suite}
                      city={user.address.city}
                      zipcode={user.address.zipcode}
                      phone={user.phone}
                      website={user.website}
                      companyName={user.company.name}
                      catchPhrase={user.company.catchPhrase}
                      bs={user.company.bs}
                    />
                );
              })
            ) : null
          }
      </section>

    );
  }
}

export default GetData;
