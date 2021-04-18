import React, { FC } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { Input } from "./Input";

interface Props {
  value: string;
  onChange(value: string): void;
}

export const AddressAutocompleteInput: FC<Props> = ({ value, onChange }) => {
  return (
    <PlacesAutocomplete
      searchOptions={{
        types: ["address"],
        componentRestrictions: { country: "US" },
      }}
      value={value}
      onChange={onChange}
      onSelect={onChange}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div className="relative">
          <Input
            label="Address"
            {...getInputProps({
              placeholder: "Search for an address...",
              className: "input w-full",
            })}
          />
          <div
            className={`bg-white absolute shadow-lg rounded-lg border-2 border-gray-200 mt-2 top-full z-50 ${
              !suggestions.length ? "invisible" : ""
            }`}
          >
            {suggestions.map((suggestion) => (
              <div
                {...getSuggestionItemProps(suggestion, {
                  className: `typography-body1 px-4 py-2 cursor-pointer animate-transitions hover:bg-gray-100 ${
                    suggestion.active ? "bg-gray-100" : ""
                  }`,
                })}
                key={suggestion.placeId}
              >
                <span>{suggestion.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};
