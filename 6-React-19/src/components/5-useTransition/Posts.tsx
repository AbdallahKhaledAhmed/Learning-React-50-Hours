const Posts = () => {
  const dataArray = Array.from({ length: 1000000 });
  return (
    <div>
      {dataArray.map((_, i) => {
        return <p key={i}>{i}</p>;
      })}
    </div>
  );
};

export default Posts;
