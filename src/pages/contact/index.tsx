import React, { useState } from "react";
import { Button } from "~/components/Button";
import { TextArea, TextInput } from "~/components/Input";
import { Section } from "~/components/Section";
import { Header } from "~/components/Typography";

interface State {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [state, setState] = useState<State>({
    name: "",
    email: "",
    message: "",
  });

  const updateField = (field: keyof State, newVal: string) =>
    setState({ ...state, [field]: newVal });

  return (
    <>
      <Header>Contact</Header>
      <Section>
        <div className="flex flex-col w-full">
          <TextInput
            value={state.name}
            onChange={(newText) => updateField("name", newText)}
            label="Name"
            placeholder="John Doe"
          />
          <TextInput
            value={state.email}
            onChange={(newText) => updateField("email", newText)}
            label="Email"
            placeholder="john_doe@gmail.com"
          />
          <TextArea
            value={state.message}
            onChange={(newText) => updateField("message", newText)}
            label="Message"
            placeholder="Hey Sunny ...."
          />
          <div>
            <Button additionalClassNames="mr-2" title="Send" />
            <Button title="Clear" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
