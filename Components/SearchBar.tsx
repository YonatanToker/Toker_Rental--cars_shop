"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react"; //another reason for use client
import { SearchManifacturer } from "@/Components";
import { useRouter } from "next/navigation";
const SearchButton = ({
  otherClasses,
}: {
  otherClasses: string;
}): React.JSX.Element => {
  //no need to create it as a component cuz it won't be reusable in any way, only attached to the search bar
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};
const SearchBar = () => {
  const [manifacturer, setManifacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent the default form submit
    if (manifacturer === "" && model === "") {
      return alert("Please fill in a search");
    }
    updateSearchParams(model.toLowerCase(), manifacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manifacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manifacturer) {
      searchParams.set("manifacturer", manifacturer);
    } else {
      searchParams.delete("manifacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManifacturer
          manifacturer={manifacturer}
          setManifacturer={setManifacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
