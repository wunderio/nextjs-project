export interface Properties {
  showCarrot?: boolean;
}

function Welcome({ showCarrot }: Properties): JSX.Element {
  return (
    <p>
      Welcome hello to Next.js! Hello
      {showCarrot && " 🥕"}
    </p>
  );
}

export default Welcome;
