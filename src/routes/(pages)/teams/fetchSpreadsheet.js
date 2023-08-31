import { GAPI_KEY } from '$env/static/private';

export const fetchSpreadsheet = async (sheetName) => {
  let spreadsheetID = '122yIAMXWzBnx5rYZhnzwix6LSAiOEfdUbItxP6JzWmA';
  let apiURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${sheetName}?alt=json&key=${GAPI_KEY}`;
  return (await fetch(apiURL)).json();
};
