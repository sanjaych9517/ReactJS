const withBorder = (Component) => {
  return (user) => {
    return (
      <div className="border-4 border-black">
        <Component {...user} />
      </div>
    );
  };
};

export default withBorder;
