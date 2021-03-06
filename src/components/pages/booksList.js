"use strict";

import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Grid, Row, Col, Button} from "react-bootstrap";
import {getBooks} from "../../actions/booksActions";

import BookItem from "./bookItem";
import BooksForm from "./booksForm";
import Cart from "./cart";

class BooksList extends React.Component{
  
  componentDidMount(){
    this.props.getBooks()
  }	
	
  render(){
    const booksList = this.props.books.map(
      (booksArr) => {
         return(
	   <Col xs={12} sm={6} md={4} key={booksArr._id}>
	     <BookItem
	       id={booksArr.id}
	       title={booksArr.title}
	       description={booksArr.description}
	       price={booksArr.price}
	     />
	   </Col>
	 )
      }		    
    )
    return(
      <Grid>
        <Row>
	  <Cart />
	</Row>
        <Col xs={12} sm={6}>
	  <BooksForm/>
	</Col>
        <Row style={{marginTop:"15px"}}>
	  {booksList} 
	</Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    books: state.books.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBooks: getBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
