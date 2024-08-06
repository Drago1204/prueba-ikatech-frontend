interface ItemProps {
    title: string;
  }
  export const Item = ({ title }: ItemProps) => {
    return (
      <li>
        <a href="#">
          <span className="hover:underline hover:underline-offset-4">
            {title}
          </span>
        </a>
      </li>
    );
  };
  