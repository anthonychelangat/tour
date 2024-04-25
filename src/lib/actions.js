"use server";

import executeQuery from "./utils";

export const allUsers = async () => {
  try {
    const users = await executeQuery("select * from users", []);
    return users;
  } catch (error) {
    console.log("There was an error fetching all users");
    throw new Error(error);
  }
};

export const user = async id => {
  try {
    const user = await executeQuery("select * from users where id = ?", [id]);
    return user;
  } catch (error) {
    console.log("There was an error fetching user");
    throw new Error(error);
  }
};

export const allGuides = async () => {
  try {
    const guides = await executeQuery("select * from guides", []);
    return guides;
  } catch (error) {
    console.log("There was an error fetching all guides");
    throw new Error(error);
  }
};

export const guide = async id => {
  try {
    const guide = await executeQuery("select * from users", []);
    return guide;
  } catch (error) {
    console.log("There was an error fetching guide");
    throw new Error(error);
  }
};

export const allAttractions = async () => {
  try {
    const attractions = await executeQuery(
      "select attractions.id as id, attractions.name as attraction, attractions.description as attraction_des, destinations.name as destination from attractions inner join destinations on destinations.id=attractions.destination_id",
      []
    );
    return attractions;
  } catch (error) {
    console.log("There was an error fetching all attractions");
    throw new Error(error);
  }
};

export const attraction = async id => {
  try {
    const attraction = await executeQuery(
      "select * from attractions where id=?",
      [id]
    );
    return attraction;
  } catch (error) {
    console.log("There was an error fetching all attractions");
    throw new Error(error);
  }
};

export const allDestinations = async () => {
  try {
    const destinations = await executeQuery("select * from destinations", []);
    return destinations;
  } catch (error) {
    console.log("There was an error fetching all destinations");
    throw new Error(error);
  }
};

export const destination = async id => {
  try {
    const destination = await executeQuery(
      "select * from destination where destination=?",
      [id]
    );
    return destination;
  } catch (error) {
    console.log("There was an error fetching destination");
    throw new Error(error);
  }
};

export const allActivities = async () => {
  try {
    const activities = await executeQuery("select * from activities", []);
    return activities;
  } catch (error) {
    console.log("There was an error fetching all activities");
    throw new Error(error);
  }
};

export const activity = async id => {
  try {
    const activity = await executeQuery("select * from users where id=?", [id]);
    return activity;
  } catch (error) {
    console.log("There was an error fetching activity");
    throw new Error(error);
  }
};

export const allCountries = async () => {
  try {
    const countries = await executeQuery("select * from countries", []);
    return countries;
  } catch (error) {
    console.log("There was an error fetching all countries");
    throw new Error(error);
  }
};

export const allRegionsPerCountry = async () => {
  try {
    const regions = await executeQuery(
      "select * from regions where country_id=1",
      []
    );
    return regions;
  } catch (error) {
    console.log("There was an error fetching regions");
    throw new Error(error);
  }
};

export const allCategories = async () => {
  try {
    const categories = await executeQuery(
      "select * from accomodation_categories",
      []
    );
    return categories;
  } catch (error) {
    console.log("There was an error fetching all categories");
    throw new Error(error);
  }
};

export const numberOfUsers = async () => {
  try {
    const numberOfUsers = await executeQuery(
      "select count(*) as users from users",
      []
    );
    return numberOfUsers;
  } catch (error) {
    console.log("There was an error fetching users");
    throw new Error(error);
  }
};

export const numberOfGuides = async () => {
  try {
    const numberOfGuides = await executeQuery(
      "select count(*) as guides from guides",
      []
    );
    return numberOfGuides;
  } catch (error) {
    console.log("There was an error fetching guides");
    throw new Error(error);
  }
};

export const numberOfAccomodations = async () => {
  try {
    const numberOfAccomodations = await executeQuery(
      "select count(*) as accomodations from accomodations",
      []
    );
    return numberOfAccomodations;
  } catch (error) {
    console.log("There was an error fetching accomodations");
    throw new Error(error);
  }
};

export const numberOfDestinations = async () => {
  try {
    const numberOfDestinations = await executeQuery(
      "select count(*) as destinations from destinations",
      []
    );
    return numberOfDestinations;
  } catch (error) {
    console.log("There was an error fetching destinations");
    throw new Error(error);
  }
};

export const numberOfCountries = async () => {
  try {
    const numberOfCountries = await executeQuery(
      "select count(*) as countries from countries",
      []
    );
    return numberOfCountries;
  } catch (error) {
    console.log("There was an error fetching countries");
    throw new Error(error);
  }
};

export const numberOfActivities= async () => {
  try {
    const numberOfActivities = await executeQuery(
      "select count(*) as activities from activities",
      []
    );
    return numberOfActivities;
  } catch (error) {
    console.log("There was an error fetching activities");
    throw new Error(error);
  }
};






