export interface Properties {
  showCarrot?: boolean;
}

function Welcome({ showCarrot }: Properties): JSX.Element {
  return (
    <p>
      Welcome to Next.js!
      {showCarrot && " 🥕"}
    </p>
  );
}

export default Welcome;
