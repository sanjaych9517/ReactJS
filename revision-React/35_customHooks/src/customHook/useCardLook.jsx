export const useCardlook = (Component) => {
  return (props) => {
    return (
      <div className="bg-gray-700 p-40 rounded-4xl" >
        <Component {...props} />
      </div>
    );
  };
};
