import { Tag } from '../interfaces/Tag';

interface DisplayTagInterface {
  tag: Tag;
  index?: number;
}

export default function DisplayTag(props: DisplayTagInterface) {
  const tag: Tag = props.tag;

  return (
    <span className="rounded-lg p-1 w-fit text-sm" style={{ backgroundColor: `${tag.color}22`, color: tag.color }}>
      {tag.name}
    </span>
  );
}
