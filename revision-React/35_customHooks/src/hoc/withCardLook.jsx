const withCardLook = (WrappedComponent) => {
  return ({user}) => {
    return (
      <div className="bg-gray-700 p-10 rounded-2xl my-4 mx-40">
        {/* <h1>This is nested component</h1>; */}
        <WrappedComponent {...user} />
      </div>
    );
  };
};

export default withCardLook;

