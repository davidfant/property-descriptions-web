import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { Input } from "../components/Input";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TagColor } from "../components/Tag";
import { TagGroup } from "../components/TagGroup";
import { AddressAutocompleteInput } from "../components/AddressAutocompleteInput";
import { generateDescription } from "../api/generateDescription";

interface TagGroupItem {
  id: string;
  label: string;
  color: TagColor;
  min?: number;
  max?: number;
  tags: string[];
}

const TAG_GROUPS: TagGroupItem[] = require("../assets/tags.json");

const IndexPage = () => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState<string>();

  const [address, setAddress] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [numBathrooms, setNumBathrooms] = useState("");
  const [tagGroups, setTagGroups] = useState(TAG_GROUPS);

  const [tagMapping, setTagMapping] = useState<Record<string, string[]>>({});
  const updateTagGroup = useCallback(
    (groupId: string, tags: string[]) => {
      setTagMapping({ ...tagMapping, [groupId]: tags });
    },
    [tagMapping]
  );

  const addCustomTag = useCallback(
    (groupId: string, customTag: string) => {
      setTagGroups(
        tagGroups.map((group) => {
          if (group.id !== groupId) return group;
          return { ...group, tags: [...group.tags, customTag] };
        })
      );
    },
    [tagGroups]
  );

  const handleGenerateDescription = useCallback(async () => {
    try {
      setLoading(true);
      const description = await generateDescription(
        tagMapping,
        address,
        numRooms,
        numBathrooms
      );
      setDescription(description);

      requestAnimationFrame(() => {
        descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
      });
    } catch {
      setDescription(
        "Could not create description. Email me at david@fant.io if this problem persists..."
      );
    } finally {
      setLoading(false);
    }
  }, [tagMapping, address, numRooms, numBathrooms]);

  return (
    <Layout title="Generate Property Listing Descriptions">
      <h1>🏡 Automatically Generate Property Listing Descriptions</h1>
      <p className="mt-2 text-gray-500">
        This is a simple tool for real estate agents to create property listing
        descriptions. Enter basic information about the property and you will
        automatically get a description suggestion. You can either use this
        description right away, or as a starting point for writing your own. If
        you're not happy with the description, simply press "Create Description"
        again and a new one will be created.
      </p>
      <p className="mt-2 text-gray-500">
        Want to see examples of descriptions this tool has created?{" "}
        <Link href="/examples">Check out this list of examples.</Link>
      </p>
      <h2 className="mb-2 mt-8">Property Details</h2>
      <div className="space-y-4">
        <AddressAutocompleteInput value={address} onChange={setAddress} />

        <div className="flex space-x-4">
          <Input
            label="Number of rooms"
            placeholder="E.g. 2"
            type="number"
            className="flex-1"
            value={numRooms}
            onChange={(event) => setNumRooms(event.target.value)}
          />
          <Input
            label="Number of bathrooms"
            placeholder="E.g. 1"
            type="number"
            className="flex-1"
            value={numBathrooms}
            onChange={(event) => setNumBathrooms(event.target.value)}
          />
        </div>
      </div>

      {tagGroups.map((group) => (
        <TagGroup
          key={group.id}
          title={group.label}
          color={group.color}
          tags={group.tags}
          min={group.min}
          max={group.max}
          selected={tagMapping[group.id]}
          onChange={(tags) => updateTagGroup(group.id, tags)}
          onAddCustomTag={(tag) => addCustomTag(group.id, tag)}
        />
      ))}

      <button disabled={loading} onClick={handleGenerateDescription}>
        Create Description
      </button>

      {loading && <Loading className="w-6 h-6 mt-4 mx-auto" />}

      <div
        ref={descriptionRef}
        className={`rounded-lg p-4 border-2 border-gray-200 w-full mt-4 text-gray-500 ${
          loading || !description ? "hidden" : ""
        }`}
      >
        {description}
      </div>
    </Layout>
  );
};

export default IndexPage;
