type Tags = {
  id: string;
  name: string;
  versions: string[];
};

type Props = {
  title: string;
  tags: Tags[];
  url: string;
};

const Card = ({ title, tags, url }: Props) => {
  return (
    <div className="mb-4 sm:mb-0">
      <a href={url}>
        <div className="card bg-base-100 w-auto shadow-sm h-full">
          <figure>
            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title truncate">{title}</h2>
            <div className="card-actions justify-end">
              {tags.map((tag) => (
                <div key={tag.id} className="badge badge-outline">
                  {tag.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
