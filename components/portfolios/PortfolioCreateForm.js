import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = values => {
  let errors = {};
  
  Object.entries(values).forEach(([key, value]) => {
    //  ;
    // if(!values[key] && (values[key]==="startDate" || values[key]==='endDate')){
    if (!values[key] && key !== "endDate") {
      errors[key] = `${key} is required`;
    }
  });
  const startDate = values.startDate;
  const endDate = values.endDate;
  //if(startDate&&endDate&&endDate.isBefore(startDate)){
  if (startDate && endDate && endDate < startDate) {
    errors.endDate = "End date cannot be earlier than start date";
  }

  return errors;
};

const PortfolioCreateForm = ({ initialValues, onSubmit, error }) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" label="title" component={PortInput} />
          <Field
            type="text"
            name="company"
            label="company"
            component={PortInput}
          />
          <Field
            type="text"
            name="location"
            label="location"
            component={PortInput}
          />
          <Field
            type="text"
            name="position"
            label="position"
            component={PortInput}
          />
          <Field
            type="textarea"
            name="description"
            label="description"
            component={PortInput}
          />
          <Field
            name="startDate"
            label="Start Date"
            initialDate={initialValues.startDate}
            component={PortDate}
          />

          <Field
            name="endDate"
            label="End Date"
            canBeDisabled={true}
            initialDate={initialValues.endDate}
            component={PortDate}
          />
          {error && <Alert color="danger">{error}</Alert>}
          <Button color="success" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;

// import React from 'react';

// export default class PortfolioCreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       title: '',
//       description: '',
//       language: '' 
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const field = event.target.name;
//     this.setState({ [field]: event.target.value });
//   }

//   handleSubmit(event) {
//     alert('A portfolio was submitted: ' + this.state.title + ' - ' + this.state.description + ' - ' + this.state.language);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={this.state.description} onChange={this.handleChange}>
            
//           </textarea>
//         </label>
//         <label>
//           Pick Your Favorite Programming Language:
//           <select name="language" value={this.state.language} onChange={this.handleChange}>
//             <option value="javascript">Javascript</option>
//             <option value="java">Java</option>
//             <option value="c++">C++</option>
//             <option value="c#">C#</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }