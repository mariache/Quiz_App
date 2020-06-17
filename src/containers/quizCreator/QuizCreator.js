import React, { Component } from "react";
import classes from "./QuizCreator.module.css";
import { Button } from "../../components/ui/button/Button";
import { Input } from "../../components/ui/input/Input";
import { CustomFragment } from "../../hoc/customFragment/CustomFragment";
import { createControl, validate, validateForm } from "../../form/formUtils";
import { Select } from "../../components/ui/select/Select";

function createOptionControl(number) {
  return createControl(
    {
      label: `Answer ${number}`,
      errorMessage: "Answer cannot be empty",
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Type your question",
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

const selectOptions = [
  { text: 1, value: 1 },
  { text: 2, value: 2 },
  { text: 3, value: 3 },
  { text: 4, value: 4 },
];

export class QuizCreator extends Component {
  state = {
    quiz: [],
    isFormValid: false,
    formControls: createFormControls(),
  };

  sibmitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = (event) => {
    event.preventDefault();
  };

  createQuizHandler = () => {};

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);
    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  selectChangeHandler = (event) => {
    this.setState({
      rightAnswerId: Number(event.target.value),
    });
  };

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
            <Select
              label="Select correct answer"
              value={this.state.rightAnswerId}
              onChange={this.selectChangeHandler}
              options={selectOptions}
            />
            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Add a question
            </Button>

            <Button
              type="success"
              onClick={this.createQuizHandler}
              disabled={this.state.quiz.length === 0}
            >
              Create a test
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;
