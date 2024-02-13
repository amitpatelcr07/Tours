function ReadMore(props) {
  let { value, handler } = props;
  let readmore = "readmore";
  // console.log(value.substring(0,100));

  return (
    <>
      <p>{value.substring(0, 200)}.....</p>
      <button onClick={handler} value={readmore}>
        ReadMore
      </button>
    </>
  );
}

export default ReadMore;
