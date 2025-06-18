import Button from "./components/Button/Button";
export default function App() {
  const handleClick = () => {
    console.log("my choice");
  };

  return <Button color={"red"} onClickProp={handleClick}>Yooo</Button>;
}
