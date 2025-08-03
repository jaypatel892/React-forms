import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty!";
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      addNewComment(values); // pass the data
      resetForm(); // clear the form after submit
    },
  });

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}

        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          placeholder="add a few remarks"
          id="remarks"
          name="remarks"
          onChange={formik.handleChange}
          value={formik.values.remarks}
        ></textarea>

        <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          id="rating"
          name="rating"
          onChange={formik.handleChange}
          value={formik.values.rating}
        />

        <br />
        <button type="submit">Add Comment!</button>
      </form>
    </div>
  );
}
 
