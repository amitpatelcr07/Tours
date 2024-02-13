function ReadLess(props) {
  const { value, handler } = props;
  let readless = "readless";
  return (
    <>
      <p>{value}</p>
      <button onClick={handler} value={readless}>
        ReadLess
      </button>
    </>
  );
}

export default ReadLess;
