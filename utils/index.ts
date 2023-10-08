import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manifacturer, year, model, limit, fuel } = filters;
  const headers = {
    "X-RapidAPI-Key": "a5ec7cd88emsh04b6624853f6afep1b9b3ajsnf5d6450b26d9",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manifacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  ); //by def it's a get request
  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number): string => {
  const CURRENT_YEAR = new Date().getFullYear();
  const carAge = CURRENT_YEAR - year;

  let basePricePerDay;
  if (carAge <= 3) {
    basePricePerDay = 60; // Newer cars have a higher base price
  } else if (carAge <= 7) {
    basePricePerDay = 50; // Moderate aged cars have the standard base price
  } else {
    basePricePerDay = 40; // Older cars have a discounted base price
  }

  // Mileage-based discount: Cars with more than 30 mpg get a $5 discount,
  // between 20 and 30 mpg get a $3 discount, and below 20 mpg get no discount.
  const mileageDiscount = city_mpg > 30 ? 5 : city_mpg > 20 ? 3 : 0;

  const rentalRatePerDay = basePricePerDay - mileageDiscount;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  //costs money so nvm... won't have any pictures for now...
};
//-------------
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
