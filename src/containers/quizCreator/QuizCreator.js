import React, { Component } from "react";
import classes from "./QuizCreator.module.css";
import { Button } from "../../components/ui/button/Button";
import { Input } from "../../components/ui/input/Input";
import { CustomFragment } from "../../hoc/customFragment/CustomFragment";
import { createControl } from "../../form/formUtils";

function createOptionControl(number) {
  return createControl(
    {
      label: `Case ${number}`,
      errorMessage: "Value cannot be empty",
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Enter the question",
        errorMessage: "Question cannot be empty",
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}
export class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls(),
  };

  sibmitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = () => {};

  createQuizHandler = () => {};

  changeHandler = (value, controlName) => {};

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <CustomFragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </CustomFragment>
      );
    });
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Test's creating</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderControls()}

            <select></select>

            <Button type="primary" onClick={this.addQuestionHandler}>
              Add a question
            </Button>

            <Button type="success" onClick={this.createQuizHandler}>
              Create a test
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;
