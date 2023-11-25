const Button = (props) => {
  //  Write your code here.
  const { name, text } = props;
  return <button className={name}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-img">
    <h1 className="heading">Social Buttons</h1>
    <div className="btnsCard">
      <Button name="likeBtn" text="Like" />
      <Button name="cmntBtn" text="Comment" />
      <Button name="shareBtn" text="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
