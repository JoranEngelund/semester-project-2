import { allListings } from "../api/index.mjs";
import { API_LISTINGS_URL } from "../constants/constants.mjs";
import { listingsLengthChecker } from "../length-checkers/listings-length-checker.mjs";
import { searchListener } from "../search/search.mjs";
import { renderAllListings } from "./render.mjs";

export async function setup() {
  const listings = await allListings(API_LISTINGS_URL);
  renderAllListings(listings);
  searchListener(listings);
  listingsLengthChecker(listings);
}
