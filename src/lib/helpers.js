"use client";

export function selectedCountryId() {
  const selectElement = document.getElementById("country");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const countryId = selectedOption.id;
  console.log(countryId, "null");
}
