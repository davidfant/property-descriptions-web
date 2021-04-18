import React, { FC, useCallback, useMemo, useState } from "react";
import _ from "lodash";
import { Tag, TagColor } from "./Tag";

interface Props {
  title: string;
  tags: string[];
  color: TagColor;
  selected?: string[];
  min?: number;
  max?: number;
  onChange(selected: string[]): void;
  onAddCustomTag(customTag: string): void;
}

export const TagGroup: FC<Props> = ({
  title,
  tags,
  color,
  selected,
  onChange,
  onAddCustomTag,
}) => {
  const tagsDict = useMemo(
    () => _.keyBy(tags.map((tag) => tag.toLowerCase())),
    [tags]
  );

  const [filter, setFilter] = useState("");
  const hasExactFilterMatch = useMemo(() => !!tagsDict[filter.toLowerCase()], [
    tagsDict,
    filter,
  ]);

  const filteredTags = useMemo(() => {
    if (!filter) return tags;
    return tags.filter((tag) =>
      tag.toLowerCase().includes(filter.toLowerCase())
    );
  }, [tags, filter]);
  const filteredAndSortedTags = useMemo(() => {
    if (!selected) return filteredTags;
    return _.sortBy(filteredTags, (tag) => -selected.indexOf(tag));
  }, [filteredTags, selected]);

  const handlePress = useCallback(
    (label) => {
      if (selected?.includes(label)) {
        onChange(selected?.filter((s) => s !== label));
      } else if (!!selected) {
        onChange([label, ...selected]);
      } else {
        onChange([label]);
      }
    },
    [onChange, selected]
  );
  const addCustomTag = useCallback(() => {
    const customTag = filter.trim();
    onAddCustomTag(customTag);
    handlePress(customTag);
    setFilter("");
  }, [handlePress, onAddCustomTag, filter]);

  return (
    <div>
      <h2 className="mt-8">
        {title}
        {/*(!!min || !!max) &&
          ` (select ${[min, max].filter((m) => !!m).join("-")})`*/}
      </h2>
      <input
        value={filter}
        type="text"
        className="w-full"
        placeholder="Search or create your own tag..."
        onChange={(event) => setFilter(event.target.value)}
      />
      <div className="mt-2 flex flex-wrap h-28 overflow-hidden items-start">
        {filteredAndSortedTags.map((label) => (
          <Tag
            key={label}
            label={label}
            color={color}
            selected={!!selected?.includes(label)}
            className="mr-2"
            onPress={handlePress}
          />
        ))}
        {!!filter && !hasExactFilterMatch && (
          <Tag
            label={`"${filter}"`}
            color={color}
            selected={false}
            className="mr-2"
            onPress={addCustomTag}
          />
        )}
      </div>
    </div>
  );
};
