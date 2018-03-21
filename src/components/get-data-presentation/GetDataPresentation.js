import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// muicss
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

// ui
import Paragraph from "../../components/ui/paragraph/Paragraph";
import Title from "../../components/ui/title/Title";

class GetDataPresentation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      userId,
      name,
      username,
      email,
      street,
      suite,
      city,
      zipcode,
      phone,
      website,
      companyName,
      catchPhrase,
      bs
    } = this.props;

    return (
      <div>
      <Row>
        <Col md="12">
          <Title title={name} />
        </Col>
        <Col md="3">
          <strong>User ID : {userId}</strong>
          <Paragraph paragraph={username} />
          <Paragraph paragraph={email} />
        </Col>
        <Col md="3">
          <Paragraph paragraph={street} />
          <Paragraph paragraph={suite} />
          <Paragraph paragraph={city} /> 
          <Paragraph paragraph={zipcode} /> 
        </Col>
        <Col md="3">
          <Paragraph paragraph={phone} />
          <a href="https://www.google.co.uk" target="_blank">
            {website}
          </a>
        </Col>
        <Col md="3">
          <Paragraph paragraph={companyName} />
          <Paragraph paragraph={catchPhrase} />
          <Paragraph paragraph={bs} />
        </Col>
      </Row>
      </div>
    );
  }
}

GetDataPresentation.propTypes = {
  userId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
  bs: PropTypes.string.isRequired
};

export default GetDataPresentation;
