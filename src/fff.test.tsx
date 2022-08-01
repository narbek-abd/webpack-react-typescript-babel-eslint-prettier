import React from "react";
import Asd from "fff";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("adds 1 + 2 to equal 3", async () => {
  const defaultProps = {
    onPasswordChange() {
      return;
    },

    onRememberChange() {
      return;
    },

    onUsernameChange() {
      return;
    },

    onSubmit() {
      return;
    },

    shouldRemember: true,
  };

  render(<Asd {...defaultProps} />);

  const loginForm = await screen.findByTestId("login-form");

  expect(loginForm).toHaveFormValues({
    username: "",

    password: "",

    remember: true,
  });

  expect(3).toBe(3);
});

test("should allow entering a username", async () => {
  const onUsernameChange = jest.fn();

  const defaultProps = {
    onPasswordChange() {
      return;
    },

    onRememberChange() {
      return;
    },

    onUsernameChange() {
      return;
    },

    onSubmit() {
      return;
    },

    shouldRemember: true,
  };

  render(<Asd {...defaultProps} onUsernameChange={onUsernameChange}/>);

  const username = await screen.findByTestId("username");

  await userEvent.type(username, "test");

  expect(onUsernameChange).toHaveBeenCalledWith("test");
});
