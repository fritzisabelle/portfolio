interface IMenuItemProps {
  itemName: string;
  itemNumber: number;
  large?: boolean;
}

export const MenuItem = ({ itemName, itemNumber, large }: IMenuItemProps) => {
  return (
    <li
      className={
        large
          ? `text-lg text-center font-light hover:font-bold hover:text-orange w-28`
          : `text-lg text-center font-light hover:font-bold hover:text-orange w-24`
      }
    >
      <span className="text-xs">0{itemNumber}/</span> {itemName}
    </li>
  );
};
