import React from "react";
import { PublicLayout, Button, Input } from "../components";

export function LoginPage() {
  return (
    <PublicLayout>
      <div>
        <h1>LoginPage</h1>
        <Button label="I am a link" to="/register" />
        <Button
          label="I am a primary button"
          onClick={() => console.log("primary")}
          primary
        />
        <Button
          label="I am a secondary button"
          onClick={() => console.log("secondary")}
          type="reset"
        />
        <Input type="number" label="Phone number" placeholder="type here" />
        <Input type="email" label="Email address" placeholder="type here" />
        <Input type="textarea" placeholder="Send a message" />
        <Input type="checkbox" label="I agree to the terms" />
        <Input type="radio" label="I agree to the privacy policy" />
      </div>
    </PublicLayout>
  );
}
