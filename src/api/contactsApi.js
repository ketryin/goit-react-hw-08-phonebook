const BASE_URL = "https://connections-api.herokuapp.com";

async function executeRequestAsync(url, options = {}, token) {
  const requestOptions = {
    ...options,
    ...{
      headers: { "Content-Type": "application/json", Authorization: token },
    },
  };
  const response = await fetch(url, requestOptions);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(
    `API failed with status ${response.statusText} during executing request.`
  );
}

export function signUp(user) {
  return executeRequestAsync(`${BASE_URL}/users/signup`, {
    method: "POST",
    body: JSON.stringify(user),
  });
}

export function logIn(user) {
  return executeRequestAsync(`${BASE_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(user),
  });
}

export function logOut(token) {
  return executeRequestAsync(
    `${BASE_URL}/users/logout`,
    { method: "POST" },
    token
  );
}

export function fetchContacts(token) {
  return executeRequestAsync(`${BASE_URL}/contacts`, {}, token);
}

export function createContact(contact, token) {
  return executeRequestAsync(
    `${BASE_URL}/contacts`,
    {
      method: "POST",
      body: JSON.stringify(contact),
    },
    token
  );
}

export function deleteContact(id, token) {
  return executeRequestAsync(
    `${BASE_URL}/contacts/${id}`,
    {
      method: "DELETE",
    },
    token
  );
}
