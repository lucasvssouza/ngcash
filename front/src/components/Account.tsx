import { AccountComponent } from "../styles";
import Transactions from "./Account/Transactions";
import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";

const Account = () => {
  const [values, setValues] = useState<any>([]);

  const getAllNumbers = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const data = await axios.get("/api/values/all");
    setValues(data);
  }, []);

  useEffect(() => {
    getAllNumbers();
  });

  console.log(values)
  return (
    <AccountComponent>
      <div>{values}</div>

      <Transactions />
    </AccountComponent>
  );
};

export default Account;
