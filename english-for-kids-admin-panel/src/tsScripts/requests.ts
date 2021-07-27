const SERVER_URL: string = "https://secure-brushlands-82702.herokuapp.com/";

export const getAllCategories = async () =>
  (await fetch(`${SERVER_URL}getAllCategories`)).json();

export const getAllCategoryCards = async (categoryName) =>
  (await fetch(`${SERVER_URL}getAllCategoryCards/${categoryName}`)).json();

export const getCategoryCardsCount = async (categoryName) =>
  (await fetch(`${SERVER_URL}getCategoryCardsCount/${categoryName}`)).json();

export const createNewCategoryReq = async (data) =>
  await fetch(`${SERVER_URL}createCategory`, {
    method: "post",
    mode: "no-cors",
    body: data,
  }).then((response) => {
    console.log("create new category, ", response.statusText);
    return response.status;
  });

export const deleteCategory = async (categoryName) =>
  (
    await fetch(`${SERVER_URL}deleteCategory/${categoryName}`, {
      method: "delete",
    })
  ).json();

export const getCategory = async (categoryName) =>
  (await fetch(`${SERVER_URL}getCategory/${categoryName}`)).json();

export const updateCategory = async (data) =>
  (
    await fetch(`${SERVER_URL}updateCategory`, {
      method: "put",
      body: data,
    })
  );

export const createNewCardReq = async (data) =>
  await fetch(`${SERVER_URL}createCard`, {
    method: "post",
    mode: "no-cors",
    body: data,
  }).then((response) => {
    console.log("create new category, ", response.statusText);
    return response.status;
  });

export const deleteCard = async (category, card) =>
  await fetch(`${SERVER_URL}deleteCard/${category}/${card}`, {
    method: "delete",
  });

export const updateCardReq = async (data) =>
  await fetch(`${SERVER_URL}updateCard`, {
    method: "put",
    body: data
  });
