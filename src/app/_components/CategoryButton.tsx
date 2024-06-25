interface CategoryButtonProps {
  category: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
  return (
    <button className="flex justify-center items-center w-24 h-12 bg-white rounded-xl m-2 border-2 border-blue-500">
      {category}
    </button>
  );
};

export default CategoryButton;
