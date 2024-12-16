import React from "react";
import { Redirect } from "expo-router";

export default function InitFlowCheck() {
  return <Redirect href={"/checkout/personal"} />;
}
