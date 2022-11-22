import axios from "axios";

export const register = async (user: string, password: string) => {
  const data = {
    username: user,
    password: password,
  };

  const baseURL = "http://localhost:5000/register";

  const response = await axios
    .post(baseURL, data)
    .then((res) => {
      return res.status;
    })
    .catch((res) => {
      return res.response.status;
    });

  return response;
};

export const login = async (user: string, password: string) => {
  const data = {
    username: user,
    password: password,
  };

  const baseURL = "http://localhost:5000/login";

  const response = await axios
    .post(baseURL, data)
    .then((res) => {
      return res.data.token;
    })
    .catch((res) => {
      return res.response.status;
    });

  return response;
};

export const session = async (token: string | null) => {
  var header = {
    headers: {
      Authorization: token,
    },
  };

  const baseURL = "http://localhost:5000/getuser";

  const response = await axios
    .get(baseURL, header)
    .then((res) => {
      return { autorized: true, data: res.data, loading: false };
    })
    .catch((res) => {
      return { autorized: false, data: {}, loading: false };
    });
  return response;
};

export const transfer = async (
  debitedUsername: string,
  creditedUsername: string,
  balance: string,
  token: string | null
) => {
  const data = {
    debitedUsername: debitedUsername,
    creditedUsername: creditedUsername,
    balance: balance,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };

  const baseURL = "http://localhost:5000/transfer";

  const response = await axios
    .post(baseURL, data, {
      headers: headers,
    })
    .then((res) => {
      return res;
    })
    .catch((res) => {
      return res.response.status;
    });

  return response;
};

export const history = async (accountId: any, token: string | null) => {
  const data = {
    accountId: accountId,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };

  const baseURL = "http://localhost:5000/history";

  const response = await axios
    .post(baseURL, data, {
      headers: headers,
    })
    .then((res) => {
      return res.data;
    })
    .catch((res) => {
      return res.response.status;
    });
  return response;
};
