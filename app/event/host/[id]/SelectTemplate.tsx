"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import Template from "./template1/Template1";

export default function SelectTemplate() {
  const params = useParams<{ id: string }>();
  const [template, setTemplate] = useState("");
  useEffect(() => {
    async function checkTemplate() {
      const res = await fetch(`/api/v1/event/getOneEvent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: params.id,
        }),
      });
      const data = await res.json();
      if (!data) {
        console.log("no template");
        return;
      }
      if (data.template === "template1") {
        setTemplate("template1");
      }
      console.log(data);
    }
    checkTemplate();
  }, [params.id]);
  return <div>{template === "template1" && <Template />}</div>;
}
