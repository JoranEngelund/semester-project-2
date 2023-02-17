import * as check from "../response-handlers/register-response.mjs";

export async function registration(url, profile, method) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(profile),
    });
    const json = await response.json();
    console.log(json);
    check.registrationResponseHandler(response);
  } catch (error) {
    console.log(error);
  }
}
