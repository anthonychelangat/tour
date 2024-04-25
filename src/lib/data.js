"use server";

import { revalidatePath } from "next/cache";
import executeQuery from "./utils";

export const addUser = async (prevState, formData) => {
  const username = formData.get("username");
  const role = formData.get("role");
  const email = formData.get("email");
  const password = formData.get("password");
  const submit = formData.get("submit");

  if (submit === "insert") {
    if (email != "" && password != "" && username != "") {
      const user = await executeQuery("select * from users where email=?", [
        email,
      ]);

      if (user.affectedRows) {
        return { message: "There is already a user with this information" };
      }

      const enterUser = await executeQuery(
        "insert into users(username,email,role,password) values(?,?,?,?)",
        [username, email, role, password]
      );

      if (enterUser.affectedRows) {
        return { message: "User has been added successfully" };
      } else {
        return { message: "There was an error adding user" };
      }
    } else {
      return { message: "Fields should not be empty" };
    }
  }
};

export const addCountry = async (prevState, formData) => {
  const country = formData.get("country");
  const description = formData.get("description");
  const submit = formData.get("submit");

  if (submit === "insert") {
    if (country != "" && description != "") {
      const country = await executeQuery(
        "select * from countries where country=?",
        [country]
      );

      if (country.affectedRows) {
        return { message: "There is already a country with this information" };
      }

      const enterCountry = await executeQuery(
        "insert into countries(country,description) values(?,?)",
        [country, description]
      );

      if (enterCountry.affectedRows) {
        return { message: "Country has been added successfully" };
      } else {
        return { message: "There was an error adding country" };
      }
    } else {
      return { message: "Fields should not be empty" };
    }
  }
};

export const addDestination = async (prevState, formData) => {
  const destination = formData.get("destination");
  const country = formData.get("country");
  const region = formData.get("region");
  const description = formData.get("description");
  const submit = formData.get("submit");

  if (submit === "insert") {
    if (
      destination != "" &&
      region != "" &&
      country != "" &&
      description != ""
    ) {
      const destination = await executeQuery(
        "select * from destinations where destination=?",
        [destination]
      );

      if (destination.affectedRows) {
        return {
          message: "There is already a destination with this information",
        };
      }

      const enterDestination = await executeQuery(
        "insert into destinations(destination,country,region,description) values(?,?,?,?)",
        [destination, country, region, description]
      );

      if (enterCountry.affectedRows) {
        return { message: "Destination has been added successfully" };
      } else {
        return { message: "There was an error adding destination" };
      }
    } else {
      return { message: "Fields should not be empty" };
    }
  }
};

export const addCategory = async (prevState, formData) => {
  const category = formData.get("category");
  const description = formData.get("description");
  const submit = formData.get("submit");

  if (submit === "insert") {
    if (category != "" && description != "") {
      const oneCategory = await executeQuery(
        "select * from accomodation_categories where type_of_accomodation=?",
        [category]
      );

      if (oneCategory.affectedRows) {
        return {
          message: "There is already a category with this information",
        };
      }

      const enterCategory = await executeQuery(
        "insert into accomodation_categories(type_of_accomodation,description) values(?,?)",
        [category, description]
      );

      if (enterCategory.affectedRows) {
        return { message: "Category has been added successfully" };
      } else {
        return { message: "There was an error adding category" };
      }
    } else {
      return { message: "Fields should not be empty" };
    }
  }
};

export const addAccomodation = async (prevState, formData) => {
  const accomodation = formData.get("accomodation");
  const destination = formData.get("destination");
  const category = formData.get("category");
  const description = formData.get("description");
  const submit = formData.get("submit");

  if (submit === "insert") {
    if (
      accomodation != "" &&
      destination != "" &&
      category != "" &&
      description != ""
    ) {
      const accomodation = await executeQuery(
        "select * from accomodations where name=?",
        [accomodation]
      );

      if (accomodation.affectedRows) {
        return {
          message: "There is already an accomodation with this information",
        };
      }

      const enterAccomodation = await executeQuery(
        "insert into accomodations(name,category_id,destination_id,description) values(?,?,?,?)",
        [accomodation, destination, category, description]
      );

      if (enterAccomodation.affectedRows) {
        return { message: "Accomodation has been added successfully" };
      } else {
        return { message: "There was an error adding accomodation" };
      }
    } else {
      return { message: "Fields should not be empty" };
    }
  }
};

export const addAttraction = async (prevState, formData) => {
  const attraction = formData.get("attraction");
  const destination = formData.get("destination");
  const description = formData.get("description");
  const submit = formData.get("submit");

  if (submit === "insert") {
    if (attraction != "" && destination != "" && description != "") {
      const oneAttraction = await executeQuery(
        "select * from attractions where name=?",
        [attraction]
      );

      if (oneAttraction.affectedRows) {
        return {
          message: "There is already an attraction with this information",
        };
      }

      const enterAttraction = await executeQuery(
        "insert into attractions(name,destination_id,description) values(?,?,?)",
        [attraction, destination, description]
      );

      if (enterAttraction.affectedRows) {
        return { message: "Attraction has been added successfully" };
      } else {
        return { message: "There was an error adding attraction" };
      }
    } else {
      return { message: "Fields should not be empty" };
    }
  }
};

export const addActivity = async (prevState, formData) => {
  const activity = formData.get("activity");
  const destination = formData.get("destination");
  const description = formData.get("description");
  const submit = formData.get("submit");

  if (submit === "insert") {
    if (activity != "" && destination != "" && description != "") {
      const oneActivity = await executeQuery(
        "select * from activities where name=?",
        [activity]
      );

      if (oneActivity.affectedRows) {
        revalidatePath("/dashboard/addActivity");
        return {
          message: "There is already an activity with this information",
        };
      }

      const enterActivity = await executeQuery(
        "insert into activities(name,destination_id,description) values(?,?,?)",
        [activity, destination, description]
      );

      if (enterActivity.affectedRows) {
        revalidatePath("/dashboard/addActivity");
        return { message: "Activity has been added successfully" };
      } else {
        revalidatePath("/dashboard/addActivity");
        return { message: "There was an error adding the activity" };
      }
    } else {
      return { message: "Fields should not be empty" };
    }
  }
};

export const handleUpload = async formData => {
  const file = formData.get("file");
  const name = file.name;
  console.log("File = ", name);
  /*const fileUpload = await executeQuery(
    "insert into activity_pictures(path) values(?)",
    [file]
  );

  if (fileUpload.affectedRows) {
    console.log("Entered");
  } else {
    console.log("not entered");
  }*/
};
