import './styles.css';
export default function Root(props) {
  return (
    <nav>
      <h1>{props.name} is mounted!</h1>
      <h1>Hello Single SPA</h1>
    </nav>
  );
}
