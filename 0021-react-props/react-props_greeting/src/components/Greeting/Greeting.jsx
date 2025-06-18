export default function Greeting({ name }) {
  name === "Klaus" ? (name = "Coach " + "Klaus") : 0;
  return <h1>Hello {name}</h1>;
}
